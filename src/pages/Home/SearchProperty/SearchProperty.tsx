import React, { useEffect, useState } from "react";
import SearchBar from "../../../components/Shared/SearchBar";
import PropertyItem from "../../../components/Shared/PropertyItem";
import { propertyDataList } from "../../../data/data";
// import PropertyItemSkeleton from "../../../components/Shared/SkeletonComponents/PropertyItemSkeleton";
import { AppDispatch } from "../../../store/store";
import { useDispatch } from "react-redux";
import { searchProperty } from "../../../store/slices/property/propertyActions";
import { PropertySearchPayload } from "../../../store/types/stateTypes";
import PropertyItemSkeleton from "../../../components/Shared/SkeletonComponents/PropertyItemSkeleton";
import { FramImg } from "../../../config/Images";
// import { useSelector } from "react-redux";
// import { selectPropertyList } from "../../../store/slices/property/propertySelectors";

const SearchProperty: React.FC = () => {
  const [searchText, setsearchText] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [propertyListData, setpropertyListData] = useState([]);
  const [isPropertiesLoading, setisPropertiesLoading] = useState(false);
  const [showSearchProperties, setshowSearchProperties] = useState(false);
  const handleSubmit = async () => {
    setshowSearchProperties(true);
    setisPropertiesLoading(true);

    if (searchText) {
      const payload: PropertySearchPayload = {
        // latitude: 40.7128,
        // longitude: -74.006,
        searchType: "A",
        address: searchText,
        mls_active: true,
      };
      const response: any = await dispatch(searchProperty(payload)).unwrap();

      console.log("response>>>", response);
      if (response.data) {
        setpropertyListData(response.data);
        setisPropertiesLoading(false);
      }
    }
  };
  useEffect(() => {
    if (propertyListData) console.log(propertyListData);
  }, [propertyListData]);

  return (
    <>
      <div className="container">
        <div className="row m-0">
          {/* <!-- search field wrap --> */}
          <SearchBar
            containerStyle={{
              flexDirection: showSearchProperties ? "row" : "column",
            }}
            searchText={searchText}
            setSearchText={setsearchText}
            onClick={handleSubmit}
          />
          <div className="home-list-animate-row">
            {propertyListData?.length != 0 && !isPropertiesLoading ? (
              propertyListData?.map(
                ({
                  propertyId,
                  address,
                  bedrooms,
                  bathrooms,

                  description,
                  // images,
                  suggestedRent,
                  garage,
                  squareFeet,
                  mlsListingPrice,
                  id,
                }) => (
                  <PropertyItem
                    id={id}
                    key={propertyId}
                    price={suggestedRent ? suggestedRent : mlsListingPrice}
                    address={address?.address}
                    bedrooms={bedrooms}
                    bathrooms={bathrooms}
                    cars={Math.floor(Math.random() * 11)} // You can add a default car value or fetch it from the data if available
                    sqftArea={squareFeet}
                    description={description}
                    imageUrl={FramImg} // Assuming you want to display the first image
                  />
                )
              )
            ) : (
              <></>
            )}

            {isPropertiesLoading &&
              Array.from({ length: 4 }).map((_, index) => (
                <PropertyItemSkeleton key={index} />
              ))}
          </div>
        </div>

        {/* {   */}
      </div>
    </>
  );
};

export default SearchProperty;
