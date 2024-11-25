import React from "react";
import {
  DownArrowIcon,
  RatingSliderIcon,
  ShackwiseLogo,
} from "../../../config/Images";
import { Link, useNavigate } from "react-router-dom";
import { PriorityOptionProps } from "../../../types/types";

const PriorityOption: React.FC<PriorityOptionProps> = ({
  label,
  placeHolderText,
}) => {
  return (
    <div className="proirties-option-box">
      <h4>{label}</h4>

      <div>
        <img src={RatingSliderIcon} width="100%" alt="" />
      </div>

      <div className="add-note-wrap mt-4">
        <input
          type="text"
          name="add-noted"
          className="note-input"
          placeholder={placeHolderText}
          id=""
        />
        {/* <button className="add-note-btn ">
            Add Note <img src={DownArrowIcon} alt="" className="ml-1" />
          </button> */}
      </div>
    </div>
  );
};
const SetPriorities: React.FC = () => {
  const navigate = useNavigate();

  const priortiesList: { label: string; placeHolder: string }[] = [
    {
      label: "Affordability",
      placeHolder:
        "What is your price range? How imperative is it that a given home is listed at or below that range?",
    },
    {
      label: "List Price vs Market Value",
      placeHolder:
        "How important is it that the list price is below market value?",
    },
    {
      label: "Location",
      placeHolder:
        "Describe the important aspects of location to you, for example, proximity to work, public transportation, amenities, etc.",
    },
    {
      label: "Kitchen Size",
      placeHolder: "Do you need a large kitchen and what is the ideal size?",
    },
    {
      label: "Kitchen Design",
      placeHolder:
        "What are the ideal traits of your ideal kitchen design and the ideal level of upgrades and updates?",
    },
    {
      label: "Master Bedroom",
      placeHolder: "What are the ideal traits of your master bedroom?",
    },
    {
      label: "Master Bath",
      placeHolder: "What are the ideal traits of your master bathroom?",
    },
    {
      label: "Secondary Bedroom(s)",
      placeHolder:
        "How many secondary bedrooms do you need and what are any ideal traits?",
    },
    {
      label: "Secondary Bath(s)",
      placeHolder:
        "How many secondary baths do you need and what do they need to have, such as a full shower-tub combo, half bath, etc.?",
    },
    {
      label: "Living/Entertaining",
      placeHolder:
        "What are your needs with regard to spaces for your daily living and entertaining guests?",
    },
    {
      label: "Basement",
      placeHolder: "If you need a basement, what does the ideal one look like?",
    },
    {
      label: "Outdoor/Yard Space",
      placeHolder: "What do you want or need in outdoor space, if anything?",
    },
    {
      label: "Parking/Garage",
      placeHolder:
        "What is your ideal parking situation? None needed, outdoor, covered, heated garage?",
    },
    {
      label: "Overall Condition",
      placeHolder:
        "What do you consider the ideal condition? Everything perfect, updates needed, a fixer-upper, etc.?",
    },
  ];

  return (
    <div className="container">
      <div className="row m-0 ">
        <div className="col-lg-12  ">
          <div className="login proirties-wrap">
            <br />
            <div className="login-header mt-4">
              <h1>Set My Home Priorities</h1>
              <h3>How important is each characteristic to you?</h3>
            </div>
            <div className="login-form col-lg-10 col-sm-12 mt-2 d-flex  flex-column">
              {/* <!-- rating silder html --> */}
              {/* <div className="proirties-option-box">
                <h4>Affordability</h4>

                <div>
                  <img src={RatingSliderIcon} width="100%" alt="" />
                </div>

                <div className="add-note-wrap mt-4">
                  <input
                    type="text"
                    name="add-noted"
                    className="note-input"
                    placeholder="What is your price range? How imperative is it that a given home is listed at or below that range?"
                    id=""
                  />
             
                </div>
              </div> */}
              {priortiesList.map((pLItem) => (
                <PriorityOption
                  label={pLItem.label}
                  placeHolderText={pLItem.placeHolder}
                />
              ))}

              <div className="text-center col-lg-4 m-auto mt-5">
                <input
                  type="button"
                  value="Submit"
                  className="login-button"
                  onClick={() => {
                    navigate("/rate-home");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPriorities;
