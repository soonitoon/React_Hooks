import { useEffect, useState } from "react";

const useTitle = (init) => {
  const [title, setTitle] = useState(init);
  const updateTitle = () => {
    const HTML_title = document.querySelector("title");
    HTML_title.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default useTitle;
