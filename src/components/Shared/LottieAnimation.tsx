// LottieAnimation.tsx
import React from "react";
import Lottie from "react-lottie-player";

interface LottieAnimationProps {
  animationData: any; // JSON data for the Lottie animation
  loop?: boolean; // Optional: whether the animation should loop
  play?: boolean; // Optional: whether the animation should autoplay
  width?: number | string; // Optional: width of the animation
  height?: number | string; // Optional: height of the animation
  styles?: any;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  play = true,
  width = 150,
  height = 150,
  styles,
}) => {
  return (
    <Lottie
      loop={loop}
      animationData={animationData}
      play={play}
      style={{ width, height, ...styles }}
    />
  );
};

export default LottieAnimation;
