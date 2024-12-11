// src/googleMapsService.ts
import { Client } from "@googlemaps/google-maps-services-js";
import axios from "axios";

const client = new Client({});
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY!;
const autocompleteUrl = process.env.REACT_APP_GOOGLE_MAPS_AUTOCOMPLETE!;
const geocodeUrl = process.env.REACT_APP_GOOGLE_MAPS!;

// Function to geocode an address
export const geocodeAddress = async (address: string) => {
  try {
    const response = await client.geocode({
      params: {
        address,
        key: apiKey,
      },
    });
    return response.data.results[0].geometry.location;
  } catch (error) {
    console.error("Geocode Error:", error);
  }
};

// Function to reverse geocode lat/lng
export const reverseGeocode = async (lat: number, lng: number) => {
  try {
    const response = await client.reverseGeocode({
      params: {
        latlng: { lat, lng },
        key: apiKey,
      },
    });
    return response.data.results[0].formatted_address;
  } catch (error) {
    console.error("Reverse Geocode Error:", error);
  }
};

// Function to search for places
export const searchPlace = async (query: string) => {
  try {
    const response = await client.textSearch({
      params: {
        query,
        key: apiKey,
      },
    });
    return response.data.results.map((place) => place.name);
  } catch (error) {
    console.error("Place Search Error:", error);
  }
};

// Function to get predictions using Google Places Autocomplete API
export const getPredictions = async (input: string) => {
  try {
    const response = await axios.get(autocompleteUrl, {
      params: {
        input,
        key: apiKey,
      },
    });
    return response.data.predictions.map(
      (prediction: { description: string }) => prediction.description
    );
  } catch (error) {
    console.error("Autocomplete Error:", error);
  }
};

export const getAddressFromLatLng = async (lat: number, lng: number) => {
  try {
    const response = await axios.get(geocodeUrl, {
      params: {
        latlng: `${lat},${lng}`,
        key: apiKey,
      },
    });

    if (response.data.status === "OK") {
      const address = response.data.results[0]?.formatted_address;
      return address || "Address not found";
    } else {
      throw new Error("Geocoding API request failed");
    }
  } catch (error) {
    console.error("Error fetching address:", error);
    throw new Error("Error fetching address");
  }
};
