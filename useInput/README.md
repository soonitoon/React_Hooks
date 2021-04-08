# useInput
React-Hook to get user's input value.

## Notice
**useInput** is custom React-Hook; So it works on only **React environment**.

## Installation
1. `$ npm install @sooni-hooks/use-input`
2. Add `import useInput from "@sooni-hooks/use-input"` in your script.
3. Done!

## How to use
**useInput** takes two arguments. One is `init value`, the other is `verification function`. `init value` is default value of input. `verification function` checks the input value and returns Boolean value. The example of `verification function` is:
```js
const verify = (value) => {
  if (typeof(value) === "string"){
    return true
  } else {
    return false
  }
}
```

useInput returns a object containing `input value` and `onChange function`.
```json
{
  value: value,
  onChange: onChange
}
```
They have same name as JSX attributes. So you can use this object inside of JSX tag with `spread operator`.

## Example
```js
function App() {
  const verify = (value) => {
    if (typeof value === "string") {
      return true;
    } else {
      return false;
    }
  };
  const attributes = useInput("name", verify);
  return (
    <div className="App">
      <h1>{attributes.value}</h1>
      <input {...attributes}></input>
    </div>
  );
}
```

## Development environment setting

1. First, you need to install **NPM**
   - Linux : `$ sudo apt install npm`
   - Windows : Go to download link https://nodejs.org/en/download/

2. Install **react** and **react-dom**
   `$ npm i react react-dom`

## Full code
```js
import { useState } from "react";

const useInput = (init, verification) => {
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

export default useInput;
```