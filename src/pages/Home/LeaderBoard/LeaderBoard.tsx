import React from "react";
import SearchBar from "../../../components/Shared/SearchBar";
import { propertyDataList } from "../../../data/data";
import PropertyItem from "../../../components/Shared/PropertyItem";

const LeaderBoard: React.FC = () => {
  return (
    <div className="container">
      <div className="row m-0">
        <SearchBar />

        <div className="home-list-animate-row">
          {propertyDataList.map(
            (
              {
                address,
                bedrooms,
                bathrooms,
                sqft_area,
                description,
                images,
                price,
              },
              index
            ) => (
              <PropertyItem
                key={index}
                price={price}
                address={address}
                bedrooms={bedrooms}
                bathrooms={bathrooms}
                cars={1} // You can add a default car value or fetch it from the data if available
                sqftArea={sqft_area}
                description={description}
                imageUrl={images[0]} // Assuming you want to display the first image
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default LeaderBoard;
