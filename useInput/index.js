import { useState } from "react";

export const useInput = (init, verification) => {
  const [value, setValue] = useState(init);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof verification === "function") {
      willUpdate = verification(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return {
    value,
    onChange,
  };
};
