# useBeforeLeave
React-Hook that can sences that user will leave the page.

## Notice
- **useBeforeLeave** is custom React-Hook; So it works on only **React environment**.

## Installation
1. `$ npm install @sooni-hooks/use-before-leave`
2. Add `import useBeforeLeave from "@sooni-hooks/use-before-leave"` in your script.
3. Done!

## How to use
**useBeforeLeave** takes `onLeave` function as argument. It is called when user will leave the current page(when user's mouse pointer get out of the page throuh the top).

## Example
```js
function App() {
  const onLeave = () => console.log("Don't Leave");
  useBeforeLeave(onLeave);
  return <div className="App"></div>;
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
```