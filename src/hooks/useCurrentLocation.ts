import { useState } from "react";

interface Location {
  lat: number;
  lng: number;
}

interface UseCurrentLocation {
  location: Location | null;
  error: string | null;
  getLocation: () => void;
}

const useCurrentLocation = (): UseCurrentLocation => {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        setError(null);
      },
      (err) => {
        setError(err.message || "Unable to retrieve location.");
      }
    );
  };

  return { location, error, getLocation };
};

export default useCurrentLocation;
