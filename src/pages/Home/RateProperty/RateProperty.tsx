import React, { useEffect, useState } from "react";
import { priortiesList, propertyDataList } from "../../../data/data";
import PriorityOption from "../../../components/Shared/PriorityOption";

import PropertyDetail from "../../../components/Shared/PropertyDetail";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../../store/store";
import { useDispatch } from "react-redux";
import { getPropertyDetail } from "../../../store/slices/property/propertyActions";
import { GetPropertyDetailPayload } from "../../../store/types/stateTypes";
// import SearchBar from "../../../components/Shared/SearchBar";

const RateProperty: React.FC = () => {
  const { propertyId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [propertyData, setpropertyData] = useState(null);
  const handleGetPropertyDetail = async (id: string) => {
    try {
      const payload: GetPropertyDetailPayload = { id };

      const response: any = await dispatch(getPropertyDetail(payload)).unwrap();

      if (response.statusCode == 200) setpropertyData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (propertyId) {
      handleGetPropertyDetail(propertyId);
    }
  }, []);
  // useEffect(() => {
  //   if (propertyData) console.log("propertyData>>", propertyData);
  // }, [propertyData]);

  return (
    <div className="container">
      <div className="row mt-5">
        {/*   search field wrap  */}

        {/*   imgs box wrap  */}
        <PropertyDetail
          price={propertyData?.mlsListingPrice}
          address={propertyData?.propertyInfo?.address?.label}
          bedrooms={propertyData?.propertyInfo?.bedrooms}
          bathrooms={propertyData?.propertyInfo?.bathrooms}
          cars={propertyData?.propertyInfo?.parkingSpaces} // You can add a default car value or fetch it from the data if available
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
