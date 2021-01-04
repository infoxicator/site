import Lottie from 'react-lottie';
import animationData from '../animations/among-us';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const ChristmasAnimation = ({ show }) => {
    if (show){
      return ( <Lottie 
    options={defaultOptions}
      height={"14%"}
      width={"20%"}
      style={{ position: "absolute", bottom: "-0.125rem",
      right: "0", pointerEvents: "none", zIndex: 1000 }}
      isClickToPauseDisabled={true}
  />)}
  return null;
  }

export default ChristmasAnimation;