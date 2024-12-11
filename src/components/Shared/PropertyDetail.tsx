import React from "react";
import {
  BadroomIcon,
  BedIcon,
  CarIcon,
  LocationIcon,
  SqftIcon,
} from "../../config/Images";
import { IPropertyDetail } from "../../types/types";
import { formatPrice } from "../../utils/commonUtils";

const PropertyDetail: React.FC<IPropertyDetail> = ({
  price,
  address,
  bedrooms,
  bathrooms,
  cars,
  sqftArea,
  description,
  imageUrl,
}) => {
  return (
    <div className="signal-list-row">
      <div className="p-0 list-box-item position-relative">
        <div className="d-flex list-box-wrap list-box-column">
          <div className="img-box position-relative">
            <img src={imageUrl} className="img-fluid" alt="Property" />
          </div>
          <div className="">
            <div className="card-body">
              <div className="rate-rating-wrap">
                <h3 className="mt-2">{formatPrice(price)}</h3>
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
                    <img src={SqftIcon} alt="Square Feet Icon" /> {sqftArea}{" "}
                    sqft
                  </div>
                </div>
              </div>
              <br />
              <div className="address-icon-wrap">
                <img src={LocationIcon} alt="Location Icon" />
                <h4>{address}</h4>
              </div>
              <br />
              <h4 className="mt-2">Overview</h4>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
