import React from "react";
import {
  EmojiBlue,
  EmojiGreen,
  EmojiRed,
  EmojiYellow,
} from "../../config/Images";
import { ProgressBarItemProps } from "../../types/types";

const ProgressBarItem: React.FC<ProgressBarItemProps> = ({
  percentage,
  userPic,
}) => {
  // Determine the emoji based on the percentage
  const getEmoji = (percentage: number): string => {
    if (percentage <= 25) return EmojiRed;
    if (percentage <= 50) return EmojiYellow;
    if (percentage <= 75) return EmojiBlue;
    return EmojiGreen;
  };
  // Determine the emoji positiion based on the percentage
  const getEmojiPosition = (percentage: number): string => {
    if (percentage <= 0) return "emoji-icon-0";
    if (percentage <= 25) return "emoji-icon-1";
    if (percentage <= 50) return "emoji-icon-2";
    if (percentage <= 75) return "emoji-icon-3";
    return "emoji-icon-4";
  };

  return (
    <div className="progress-bar-img-wrap mt-2">
      {/* User Picture */}
      <div className="userpic-wrap">
        <img src={userPic} alt="User" />
      </div>

      {/* Progress Bar */}
      <div className="progress progress-wrap ">
        <div
          className={`progress-bar w-${percentage} `}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>

        {/* Emoji Icon */}
        <span className={getEmojiPosition(percentage)}>
          <img src={getEmoji(percentage)} alt="Emoji" />
        </span>
      </div>
    </div>
  );
};

export default ProgressBarItem;
