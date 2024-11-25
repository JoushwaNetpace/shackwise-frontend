import React from "react";
import { LocationIcon } from "../../config/Images";

const SearchBar: React.FC = () => {
  return (
    <div className="search-wrap col-lg-8 col-sm-12 mx-auto mt-4 mb-4">
      <h3>Search home to rate</h3>
      <div className="search-field-btn-wrap">
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
  );
};

export default SearchBar;
