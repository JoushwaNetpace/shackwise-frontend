import React from "react";
import { LocationIcon } from "../../../config/Images";

const SearchProperty: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="row m-0">
          {/* <!-- search field wrap --> */}
          <div
            className="search-wrap col-lg-8 col-sm-12 mx-auto mt-5 mb-5"
            style={{ flexDirection: "column" }}
          >
            <br />
            <br />
            <br />
            <h3>Search home to rate</h3>
            <div
              className="search-field-btn-wrap"
              style={{ flexDirection: "column" }}
            >
              <div className="search-field-wrap">
                <input
                  type="text"
                  className="search-field-input"
                  placeholder="1313 Mockingbrid Lane Los  ngeles, CA 90210
            "
                />
                <span>
                  <img src={LocationIcon} alt="" />
                </span>
              </div>
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchProperty;
