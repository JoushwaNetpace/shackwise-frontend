import React from "react";
import { Skeleton } from "antd";

const PropertyItemSkeleton: React.FC = () => {
  return (
    <div className="p-0 list-box-item position-relative">
      <div className="d-flex list-box-wrap list-box-column">
        <div className="img-box">
          <Skeleton.Image
            active
            className="w-100"
            style={{ height: "200px" }}
          />
          {/* <div className="tag-wrap">
            <div className="tag-blue">
              <Skeleton active paragraph={false} title={false} />
            </div>
            <div className="tag-yellow">
              <Skeleton active paragraph={false} title={false} />
            </div>
          </div> */}
        </div>
        <div className="">
          <div className="card-body">
            <div className="rate-rating-wrap">
              <Skeleton active paragraph={false} title={false} />
              <Skeleton.Button active style={{ width: 100 }} />
            </div>
            <Skeleton active paragraph={{ rows: 1 }} title={false} />
            <div className="home-details-wrap">
              <Skeleton active paragraph={false} title={false} />
              <Skeleton active paragraph={false} title={false} />
              <Skeleton active paragraph={false} title={false} />
              <Skeleton active paragraph={false} title={false} />
            </div>
            <Skeleton active paragraph={{ rows: 2 }} title={false} />
            <div className="d-flex justify-content-between align-items-center">
              <Skeleton.Button active style={{ width: 150 }} />
              <Skeleton.Button active style={{ width: 40 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItemSkeleton;
