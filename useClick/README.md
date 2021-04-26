# useClick
React-Hook that connects the function to the DOM element.

## Notice
- **useClick** is custom React-Hook; So it works on only **React environment**.
- I know that the function of useClick is same as `onClick` attribute.🙃 It is a functional programming practice!

## Installation
1. `$ npm install @sooni-hooks/use-click`
2. Add `import useClick from "@sooni-hooks/use-click"` in your script.
3. Done!

## How to use
**useClick** takes `handleClick()` as an argument. `handleClick()` is called when user click the element.

`useClick` returns `element` that is reference of the DOM element.

## Example
```js
function App() {
  const handleClick = () => console.log("Clicked");
  const element = useClick(handleClick);
  return (
    <div className="App">
      <h1 ref={element}>Click me</h1>
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
```