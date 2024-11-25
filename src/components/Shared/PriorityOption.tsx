import { RatingSliderIcon } from "../../config/Images";
import { IPriorityOption } from "../../types/types";

const PriorityOption: React.FC<IPriorityOption> = ({ label, placeHolder }) => {
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
          placeholder={placeHolder}
          id=""
        />
        {/* <button className="add-note-btn ">
            Add Note <img src={DownArrowIcon} alt="" className="ml-1" />
          </button> */}
      </div>
    </div>
  );
};

export default PriorityOption;
