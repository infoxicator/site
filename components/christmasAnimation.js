import Lottie from 'react-lottie';
import animationData from '../animations/christmas';

const defaultOptions = {
  loop: true,
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
      height={"100%"}
      width={"100%"}
      style={{ position: "absolute", pointerEvents: "none", zIndex: 1000 }}
      isClickToPauseDisabled={true}
  />)}
  return null;
  }

export default ChristmasAnimation;