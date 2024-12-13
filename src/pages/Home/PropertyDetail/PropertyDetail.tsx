import React from "react";
import {
  BadroomIcon,
  BedIcon,
  CarIcon,
  FramImg,
  LocationIcon,
  SqftIcon,
} from "../../../config/Images";
// import SearchBar from "../../../components/Shared/SearchBar";
import { IPropertyRating } from "../../../types/types";
import PriorityBoxItem from "../../../components/Shared/PriorityBoxItem";
import { propertyDataList, propertyRatingList } from "../../../data/data";
import PropertyItem from "../../../components/Shared/PropertyItem";
import { useParams } from "react-router-dom";

const PropertyDetail: React.FC = () => {
  const { propertyId } = useParams();

  return (
    <div className="container">
      <div className="row mt-5">
        {/* <SearchBar /> */}
        <div className="row p-0 m-auto">
          <div className="col-lg-8 col-md-8 col-sm-12">
            {/* <!-- imgs box wrap --> */}
            <div className="signal-list-row">
              <div className="p-0 list-box-item position-relative">
                <div className="d-flex list-box-wrap list-box-column">
                  <div className="img-box position-relative">
                    <img src={FramImg} className="img-fluid" alt="..." />
                    {/* <!-- <div className="tag-wrap">
                <div className="tag-blue">
                  <p>87</p>
                  <span>Score</span>
                </div>
                <div className="tag-yellow">
                  <p>91</p>
                  <span>Score</span>
                </div>
              </div> --> */}
                  </div>
                  <div className="">
                    <div className="card-body">
                      <div className="rate-rating-wrap">
                        <h3 className="mt-2">1,098.00 USD</h3>
                        <div className="home-details-wrap">
                          <div>
                            <img src={BedIcon} alt="" /> 3
                          </div>
                          <div>
                            <img src={BadroomIcon} alt="" /> 2
                          </div>
                          <div>
                            <img src={CarIcon} alt="" /> 1
                          </div>
                          <div>
                            <img src={SqftIcon} alt="" /> 150sqft
                          </div>
                        </div>
                        {/* <!-- <button className="edit-rating-btn">EDIT RATINGS <img src="images/star-icon.svg" alt=""/></button> --> */}
                      </div>
                      {/* <!-- <h5 className="card-title mb-0 mt-2">1313 Mockingbrid Lane Los Angeles, CA 90210</h5> --> */}
                      <br />

                      <p className="card-text">
                        <img src={LocationIcon} /> 1313 Mockingbrid Lane Los
                        Angeles, CA 90210
                      </p>
                      <br />
                      <h4 className="mt-2">Overview</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      {/* <!-- <div className="d-flex justify-content-between align-items-center">
                  <a href="#" className="view-details-link">View Detail Page</a>

                  <div className="one-third-pod-btn p-0"> <a href="#" className="edit-rating-btn py-2 px-3"><img
                        src="images/share-icon-yellow.svg"></a> </div>
                </div> --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              {propertyRatingList?.map(
                ({ percentage, userPic, title }: IPropertyRating) => {
                  return (
                    <PriorityBoxItem
                      percentage={percentage}
                      userPic={userPic}
                      title={title}
                    />
                  );
                }
              )}
              <br />
              {/* <div className="text-center col-lg-4 m-auto mt-5">
                <input type="button" value="Submit" className="login-button" />
              </div> */}
            </div>
          </div>
          {/* Top Ranked Home */}
          <div className="col-lg-4 col-md-4 col-sm-12 property-details-right">
            <h2 className="">Top-ranked homes</h2>
            <div className="property-details-right-wrap">
              {propertyDataList
                .slice(0, 3)
                .map(
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
                      id={index}
                      key={index}
                      price={parseFloat(price)}
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
      </div>
    </div>
  );
};
export default PropertyDetail;
