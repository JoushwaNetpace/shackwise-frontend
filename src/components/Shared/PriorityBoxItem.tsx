import React from "react";
import { IPropertyRating } from "../../types/types";
import ProgressBarItem from "./ProgressBarItem";
interface IPriorityBoxItem extends IPropertyRating {
  title?: string;
}
const PriorityBoxItem: React.FC<IPriorityBoxItem> = ({
  title,
  percentage,
  userPic,
}) => {
  return (
    <div className="proirties-option-box compare-option-box-wrap">
      <h4>{title}</h4>
      <ProgressBarItem percentage={percentage} userPic={userPic} />
    </div>
  );
};
export default PriorityBoxItem;
