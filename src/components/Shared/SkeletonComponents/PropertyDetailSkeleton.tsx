import { Skeleton } from "antd";
import React from "react";

const PropertyDetailSkeleton: React.FC = () => {
  return (
    <div className="signal-list-row">
      <div className="p-0 list-box-item position-relative">
        <div className="d-flex list-box-wrap list-box-column">
          {/* Image Skeleton */}
          <div className="img-box position-relative">
            <Skeleton.Image active className="img-fluid w-100" />
          </div>

          <div className="flex-grow-1">
            <div className="card-body">
              {/* Price Skeleton */}
              <div className="rate-rating-wrap">
                <Skeleton.Input active style={{ width: 100, height: 30 }} />
              </div>

              {/* Home Details Skeleton */}
              <div className="home-details-wrap mt-3">
                <Skeleton.Button
                  active
                  style={{ width: 50, marginBottom: 10 }}
                />
                <Skeleton.Button
                  active
                  style={{ width: 50, marginBottom: 10 }}
                />
                <Skeleton.Button
                  active
                  style={{ width: 50, marginBottom: 10 }}
                />
                <Skeleton.Button
                  active
                  style={{ width: 70, marginBottom: 10 }}
                />
              </div>

              {/* Address Skeleton */}
              <div className="address-icon-wrap mt-3">
                <Skeleton.Input active style={{ width: 200, height: 20 }} />
              </div>

              {/* Overview Title Skeleton */}
              <div className="mt-3">
                <Skeleton.Input active style={{ width: 100, height: 20 }} />
              </div>

              {/* Description Skeleton */}
              <Skeleton active paragraph={{ rows: 3 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailSkeleton;
