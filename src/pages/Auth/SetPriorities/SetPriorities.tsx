import React from "react";
import { useNavigate } from "react-router-dom";
import PriorityOption from "../../../components/Shared/PriorityOption";
import { priortiesList } from "../../../data/data";

const SetPriorities: React.FC = () => {
  const navigate = useNavigate();

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

              {priortiesList.map((pLItem) => (
                <PriorityOption
                  label={pLItem.label}
                  placeHolder={pLItem.placeHolder}
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
