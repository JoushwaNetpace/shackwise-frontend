import { UserPic } from "../../config/Images";
import { IPriorityOption } from "../../types/types";
import type { SliderSingleProps } from "antd";
import { Slider } from "antd";

const PriorityOption: React.FC<
  IPriorityOption & {
    onRatingChange?: (value: number) => void;
    onNoteChange: (value: string) => void;
    value?: number;
  }
> = ({
  label,
  placeHolder,
  mode,
  name,
  onRatingChange,
  onNoteChange,
  value,
}) => {
  const marks: SliderSingleProps["marks"] = {
    0: {
      style: {
        color: "#666",
        fontSize: "12px",
        transform: "translateX(0)", // Align at the start
      },
      label: mode == "rate" ? "Awful" : "Not at All",
    },
    25: {
      style: {
        color: "white",
        fontSize: "12px",
        textAlign: "center",
      },
      label: "Somewhat",
    },
    50: {
      style: {
        color: "#666",
        fontSize: "12px",
        textAlign: "center",
      },
      label: mode == "rate" ? "Fair" : "Somewhat",
    },
    75: {
      style: {
        color: "white",
        fontSize: "12px",
        textAlign: "center",
      },
      label: "Somewhat",
    },
    100: {
      style: {
        color: "#666",
        fontSize: "12px",
        transform: "translateX(-100%)", // Align at the end
      },
      label: mode == "rate" ? "Awesome!" : "Extremely",
    },
  };

  return (
    <div className="proirties-option-box ">
      <h4 className="py-2">{label}</h4>

      <div className="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-12 px-0 mt-1">
              <Slider
                className="custom-slider"
                onChange={onRatingChange}
                marks={marks}
                step={25} // Ensures snapping to each of the five positions
                defaultValue={value ? value : 0}
                tooltip={{ open: false }}
                // trackStyle={{ backgroundColor: "#4a90e2" }}
                // handleStyle={{ borderColor: "black" }}
                // railStyle={{ backgroundColor: "#d3d3d3" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="add-note-wrap mt-2">
        {mode == "rate" && (
          <div className="userpic-wrap ">
            <img src={UserPic} alt="" />
          </div>
        )}
        <input
          type="text"
          name={name}
          className="note-input"
          placeholder={placeHolder}
          onChange={(e) => onNoteChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PriorityOption;
