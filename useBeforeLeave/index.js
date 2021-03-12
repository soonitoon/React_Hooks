import { useEffect } from "react";

const useBeforeLeave = (onLeave) => {
  if (typeof onLeave !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onLeave();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};

export default useBeforeLeave;
