import React from "react";
import { priortiesList, propertyDataList } from "../../../data/data";
import PriorityOption from "../../../components/Shared/PriorityOption";

import PropertyDetail from "../../../components/Shared/PropertyDetail";
import SearchBar from "../../../components/Shared/SearchBar";

const RateProperty: React.FC = () => {
  return (
    <div className="container">
      <div className="row m-0">
        {/*   search field wrap  */}
        <SearchBar />

        {/*   imgs box wrap  */}
        <PropertyDetail
          price={propertyDataList[0].price}
          address={propertyDataList[0].address}
          bedrooms={propertyDataList[0].bedrooms}
          bathrooms={propertyDataList[0].bathrooms}
          cars={1} // You can add a default car value or fetch it from the data if available
          sqftArea={propertyDataList[0].sqft_area}
          description={propertyDataList[0].description}
          imageUrl={propertyDataList[0].images[0]} // Assuming you want to display the first image
        />

        <div className="col-lg-8 col-sm-12 m-auto mt-5">
          <div className="text-center mt-4">
            <h1 className="text-center">Ratings</h1>
            <h3 className="text-center">
              How does each characteristic in this house rate?
            </h3>
          </div>
          {priortiesList.map((pLItem, index) => (
            <PriorityOption
              key={index}
              label={pLItem.label}
              placeHolder={pLItem.placeHolder}
            />
          ))}

          <br />
          <div className="text-center col-lg-4 m-auto mt-5">
            <input type="button" value="Submit" className="login-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateProperty;
