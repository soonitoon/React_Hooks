# useScroll
React-Hook that catches user's scroll position easy way.

## Notice
**useTitle** is custom React-Hook; So it works on only **React environment**.

## Installation
1. `$ npm install @sooni-hooks/use-scroll`
2. Add `import useTabs from "@sooni-hooks/use-scroll"` in your script.
3. Done!

## How to use
**useScroll** returns user's current scroll position object.
```js
{X: 0, Y: 0}
```
This object can be used to create interactive page.

## Example

```js
function App() {
  const { Y } = useScroll();
  return (
    <div
      className="App"
      style={{
        height: "1000vh",
        width: "1000vw",
      }}
    >
      <h1
        style={{
          color: Y > 1000 ? "red" : "blue",
          position: "fixed",
        }}
      >
        Hello
      </h1>
    </div>
  );
}
```
In this example code, when user's `scrollX` exceeds 1000, color of `h1` is changed to blue.

## Development environment setting

1. First, you need to install **NPM**
   - Linux : `$ sudo apt install npm`
   - Windows : Go to download link https://nodejs.org/en/download/

2. Install **react** and **react-dom**
   `$ npm i react react-dom`

## Full code
```js
import { useEffect, useState } from "react";

const useScroll = () => {
  const [position, setPosition] = useState({
    X: 0,
    Y: 0,
  });
  const onScroll = () => {
    setPosition({
      X: window.scrollX,
      Y: window.scrollY,
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return position;
};

export default useScroll;
```