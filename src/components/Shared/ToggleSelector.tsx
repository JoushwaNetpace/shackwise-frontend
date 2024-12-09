import React, { useState } from "react";

interface ToggleMode {
  share: "share";
  compare: "compare";
}

export const ToggleSelector: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<ToggleMode>("share");

  const handleModeChange = (mode: ToggleMode) => {
    setSelectedMode(mode);
  };

  return (
    <div className="s-toggle-pill-wrapper">
      <div
        className="s-toggle-selector"
        style={{ left: selectedMode === "share" ? "0" : "50%" }}
      />

      <div
        className="s-toggle-option"
        onClick={() => handleModeChange("share")}
      >
        <label>
          <input
            type="radio"
            name="liveToggle"
            id="live"
            checked={selectedMode === "share"}
            onChange={() => handleModeChange("share")}
          />
          <span>Share</span>
        </label>
      </div>

      <div
        className="s-toggle-option"
        onClick={() => handleModeChange("compare")}
      >
        <label>
          <input
            type="radio"
            name="liveToggle"
            id="time-shifted"
            checked={selectedMode === "compare"}
            onChange={() => handleModeChange("compare")}
          />
          <span>Compare</span>
        </label>
      </div>
    </div>
  );
};
