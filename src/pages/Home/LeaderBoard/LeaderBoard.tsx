import React, { useState } from "react";
import SearchBar from "../../../components/Shared/SearchBar";
import { propertyDataList } from "../../../data/data";
import PropertyItem from "../../../components/Shared/PropertyItem";

const LeaderBoard: React.FC = () => {
  const [searchText, setsearchText] = useState("");
  return (
    <div className="container">
      <div className="row m-0">
        <SearchBar
          searchText={searchText}
          setSearchText={setsearchText}
          onClick={() => {
            console.log("leaderboardsearch>", searchText);
          }}
        />

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
                id={index.toString()}
                compareMode={true}
                isEditable={true}
                key={index}
                price={price}
                address={address}
                bedrooms={bedrooms}
                bathrooms={bathrooms}
                cars={Math.floor(Math.random() * 11)} // You can add a default car value or fetch it from the data if available
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
