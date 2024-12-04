import React from "react";
import { priortiesList } from "../../../data/data";
import PriorityOption from "../../../components/Shared/PriorityOption";

export const HomePriority: React.FC = () => {
  return (
    <div className="container">
      <div className="row m-0">
        <div className="col-lg-8 col-sm-12 m-auto mt-5">
          <div className="text-center mt-4 mb-5">
            <h1>Set My Home Priorities</h1>
            <h3>How important is each characteristic to you?</h3>
            {priortiesList.map((pLItem) => (
              <PriorityOption
                label={pLItem.label}
                placeHolder={pLItem.placeHolder}
              />
            ))}
          </div>

          <div className="text-center col-lg-4 m-auto mt-5">
            <input type="button" value="Submit" className="login-button" />
          </div>
        </div>
      </div>
    </div>
  );
};
