import { useState } from "react";

const useTabs = (init, array) => {
  if (!array || !Array.isArray(array)) {
    return;
  }
  const [currentTab, setCurrentTab] = useState(init);
  const onClick = (value) => {
    setCurrentTab(value);
  };
  return {
    currentContent: array[currentTab],
    onClick,
  };
};

export default useTabs;
