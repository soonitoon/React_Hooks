import { useRef } from "react";

const useFullscreen = (fullscreenCallback) => {
  const element = useRef();
  const runCallback = (isFull) => {
    if (fullscreenCallback && typeof fullscreenCallback === "function") {
      fullscreenCallback(isFull);
    }
  };
  const onFullscreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
    }
    runCallback(true);
  };
  const offFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullscreen) {
      document.mozCancelFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCallback(false);
  };

  return { element, onFullscreen, offFullscreen };
};

export default useFullscreen;
