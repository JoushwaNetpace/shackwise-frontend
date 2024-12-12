import React from "react";
import { RateModeEnum } from "../../store/types/stateTypes";

interface ToggleSelectorProps {
  selectedMode: RateModeEnum;
  setSelectedMode: (mode: RateModeEnum) => void;
}

export const ToggleSelector: React.FC<ToggleSelectorProps> = ({
  selectedMode,
  setSelectedMode,
}) => {
  const handleModeChange = (mode: RateModeEnum) => {
    setSelectedMode(mode);
  };

  return (
    <div className="s-toggle-pill-wrapper">
      <div
        className="s-toggle-selector"
        style={{ left: selectedMode === "SHARE" ? "0" : "50%" }}
      />

      <div
        className="s-toggle-option"
        onClick={() => handleModeChange("SHARE")}
      >
        <label>
          <input
            type="radio"
            name="liveToggle"
            id="live"
            checked={selectedMode === "SHARE"}
            onChange={() => handleModeChange("SHARE")}
          />
          <span>Share</span>
        </label>
      </div>

      <div
        className="s-toggle-option"
        onClick={() => handleModeChange("COMPARE")}
      >
        <label>
          <input
            type="radio"
            name="liveToggle"
            id="time-shifted"
            checked={selectedMode === "COMPARE"}
            onChange={() => handleModeChange("COMPARE")}
          />
          <span>Compare</span>
        </label>
      </div>
    </div>
  );
};
