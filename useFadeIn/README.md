# useFadeIn
React-Hook to use Fade-In effect easy way

## Notice
**useFadeIn** is custom React-Hook; So it works on only **React environment**.

## Installation
1. `$ npm install @sooni-hooks/use-fade-in`
2. Add `import useFadeIn from "@sooni-hooks/use-fade-in"` in your script.
3. Done!

## How to use
**useFadeIn** takes two argument; `duration` and `delay`. Each argument is property of CSS transition. The default value is:
- duration = 2
- delay = 0

`useFadeIn` returns a object that consists of attributes of DOM element. You'll use this object in the DOM element with `spead operator`.

## Example
```js
function App() {
  const attributes = useFadeIn(3, 1);
  return (
    <div className="App">
      <h1 {...attributes}>Hello Hook!</h1>
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
import { useEffect, useRef } from "react";

const useFadeIn = (duration = 2, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    const { current } = element;
    if (current) {
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
```