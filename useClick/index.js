import { useRef, useEffect } from "react";

const useClick = (handleClick) => {
  if (typeof handleClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", handleClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", handleClick);
      }
    };
  }, []);
  return element;
};

export default useClick;
