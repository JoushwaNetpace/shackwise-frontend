import React from "react";
import {
  BadroomIcon,
  BedIcon,
  CarIcon,
  ShareIconYellow,
  SqftIcon,
  StarIcon,
} from "../../config/Images";
import { IPropertyDetail } from "../../types/types";
import { useNavigate } from "react-router-dom";

const PropertyItem: React.FC<IPropertyDetail> = ({
  price,
  address,
  bedrooms,
  bathrooms,
  cars,
  sqftArea,
  description,
  imageUrl,
  compareMode = false,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="p-0 list-box-item position-relative"
      onClick={() => navigate("/home/property-detail")}
    >
      <div className="d-flex list-box-wrap list-box-column">
        <div className="img-box position-relative">
          <img src={imageUrl} className="img-fluid" alt="Property" />
          {compareMode && (
            <div className="tag-wrap">
              <div className="tag-blue">
                <p>87</p>
                <span>Score</span>
              </div>
              <div className="tag-yellow">
                <p>91</p>
                <span>Score</span>
              </div>
            </div>
          )}
        </div>
        <div className="">
          <div className="card-body">
            <div className="rate-rating-wrap">
              <h3 className="mt-2">{price}</h3>
              <button className="edit-rating-btn">
                EDIT RATINGS <img src={StarIcon} alt="" />
              </button>
            </div>
            <h5 className="card-title mb-0 mt-2">{address}</h5>

            <div className="home-details-wrap">
              <div>
                <img src={BedIcon} alt="Bed Icon" /> {bedrooms}
              </div>
              <div>
                <img src={BadroomIcon} alt="Bathroom Icon" /> {bathrooms}
              </div>
              <div>
                <img src={CarIcon} alt="Car Icon" /> {cars}
              </div>
              <div>
                <img src={SqftIcon} alt="Square Feet Icon" /> {sqftArea} sqft
              </div>
            </div>
            <h4 className="mt-2"></h4>

            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <a href="#" className="view-details-link">
                View Detail Page
              </a>

              <div className="one-third-pod-btn p-0">
                {" "}
                <a href="#" className="edit-rating-btn py-2 px-3">
                  <img src={ShareIconYellow} />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
