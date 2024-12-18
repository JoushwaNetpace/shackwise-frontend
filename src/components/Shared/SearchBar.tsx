import React, { useEffect, CSSProperties, useState, useRef } from "react";
import { LocationIcon } from "../../config/Images";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import toast from "react-hot-toast";
import {
  IPrediction,
  usePlacePredictions,
} from "../../hooks/usePlacePredictions"; // Import the custom hook
import { getAddressFromLatLng } from "../../lib/googleMapsService";
import useClickOutside from "../../hooks/useClickOutside";

// Define props interface to accept style props and additional handlers
interface SearchBarProps {
  containerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  iconStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
  onClick: () => void; // onClick handler for the search button
  searchText?: string; // function to set search value
  setSearchText: (value: string) => void; // function to set search text
}

const SearchBar: React.FC<SearchBarProps> = ({
  containerStyle,
  inputStyle,
  iconStyle,
  buttonStyle,
  onClick,
  searchText,
  setSearchText,
}) => {
  const { location, getLocation } = useCurrentLocation();
  const [showPredications, setshowPredications] = useState(false);

  // Use the hook to get predictions
  const { predictions, getPredictions, loading, error } = usePlacePredictions();

  const handleGetCurrentLocation = async () => {
    try {
      getLocation();
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleGetLocationList = async (value: string) => {
    try {
      if (value) {
        setSearchText(value);
        // Use the hook to get predictions for the typed value
        getPredictions(value);
        setshowPredications(true);
      } else {
        // If the new value is empty, reset the searchText state
        setSearchText("");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    const fetchAddress = async () => {
      if (location?.lat && location?.lng && !searchText) {
        try {
          const address = await getAddressFromLatLng(
            location.lat,
            location.lng
          );
          if (address) setSearchText(address);
        } catch (err) {
          console.error("Error fetching address:", err);
        }
      }
    };

    fetchAddress();
  }, [location, searchText]);

  const handleSearchClick = () => {
    if (searchText) onClick(); // Call the onClick handler if provided
  };

  const handleSelectAddress = async (prediction: IPrediction) => {
    try {
      setSearchText(prediction.address);
      setshowPredications(false);
    } catch (error) {
      console.log("error>>", error);
    }
  };
  const suggestionRef = useRef(null);

  const { handleEvent } = useClickOutside(suggestionRef, (isOutside, event) => {
    if (isOutside) {
      setshowPredications(false); // Close dropdown when click outside
    }
  });

  return (
    <div
      className="search-wrap col-lg-10 col-sm-12 mx-auto mt-4 mb-4"
      style={containerStyle}
    >
      <br />
      <br />
      <br />
      <h3>Search home to rate</h3>
      <div className="search-field-btn-wrap" style={containerStyle}>
        <div className="search-field-wrap">
          <input
            type="text"
            value={searchText}
            className="search-field-input"
            placeholder="Enter location"
            onChange={(e) => handleGetLocationList(e.target.value)}
            style={inputStyle}
          />
          {predictions?.length != 0 && showPredications ? (
            <div
              ref={suggestionRef}
              className="predictions-dropdown dropdown-menu show"
            >
              {predictions.map((prediction: any, index: number) => (
                <button
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleSelectAddress(prediction)}
                >
                  {prediction.address}
                </button>
              ))}
            </div>
          ) : (
            <></>
          )}
          <span
            onClick={handleGetCurrentLocation}
            style={{ cursor: "pointer", display: "inline-block", ...iconStyle }}
          >
            <img
              src={LocationIcon}
              alt="Location Icon"
              style={{ width: "24px", height: "24px" }}
            />
          </span>
        </div>

        <button
          className={searchText != "" ? "search-btn" : "search-btn-disabled"}
          disabled={searchText == "" && true}
          style={{ ...buttonStyle }}
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>

      {/* Display predictions when available */}
      {/* {loading && <p>Loading predictions...</p>}
      {error && <p>Error loading predictions: {error}</p>} */}
    </div>
  );
};

export default SearchBar;
