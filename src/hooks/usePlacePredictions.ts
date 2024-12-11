import { useState, useCallback, useRef } from "react";
import axios from "axios";
import pLimit from "p-limit";

const autocompleteUrl = process.env.REACT_APP_GOOGLE_MAPS_AUTOCOMPLETE;
const placeDetailsUrl = process.env.REACT_APP_GOOGLE_MAPS_PLACE_DETAIL;
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export interface IPrediction {
  address: string;
  location: {
    lat: number;
    lng: number;
  };
}

const MAX_PREDICTIONS = Number(process.env.REACT_APP_MAX_PREDICTIONS) || 5;
const CONCURRENCY_LIMIT = Number(process.env.REACT_APP_CONCURRENCY_LIMIT) || 3;

// In-memory cache for place details
const placeDetailsCache = new Map<string, { lat: number; lng: number }>();

export const usePlacePredictions = () => {
  const [predictions, setPredictions] = useState<IPrediction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Create a concurrency limiter
  const limit = pLimit(CONCURRENCY_LIMIT);

  // Ref for debounce timer
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Fetch place details
  const fetchPlaceDetails = async (placeId: string, description: string) => {
    if (placeDetailsCache.has(placeId)) {
      return {
        address: description,
        location: placeDetailsCache.get(placeId)!,
      };
    }

    try {
      const { data } = await axios.get(placeDetailsUrl, {
        params: { place_id: placeId, key: apiKey },
      });

      const location = data.result.geometry.location;
      placeDetailsCache.set(placeId, location);

      return {
        address: description,
        location,
      };
    } catch (err) {
      console.error(`Error fetching details for place_id ${placeId}:`, err);
      return null;
    }
  };

  // Fetch predictions with debounce
  const getPredictions = useCallback((input: string) => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(async () => {
      if (!input) {
        setPredictions([]);
        return;
      }

      setLoading(true);
      setError(null);

      const controller = new AbortController();

      try {
        // Component restrictions for USA, UK, and Canada

        const { data } = await axios.get(autocompleteUrl, {
          params: {
            input,
            key: apiKey,
          },
          signal: controller.signal,
        });

        const limitedPredictions = data.predictions.slice(0, MAX_PREDICTIONS);

        const results = await Promise.all(
          limitedPredictions.map(
            (prediction: { description: string; place_id: string }) =>
              limit(() =>
                fetchPlaceDetails(prediction.place_id, prediction.description)
              )
          )
        );

        // Filter out any failed requests
        setPredictions(
          results.filter((item): item is IPrediction => item !== null)
        );
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          console.error("Error fetching predictions:", err);
          setError("Failed to fetch predictions.");
        }
      } finally {
        setLoading(false);
      }

      return () => controller.abort();
    }, 500); // Debounce for 500ms
  }, []);

  return { predictions, getPredictions, loading, error };
};
