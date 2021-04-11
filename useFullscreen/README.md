# useFullscreen
React-Hook to use Fullscreen easy way

## Notice
**useInput** is custom React-Hook; So it works on only **React environment**.

## Installation
1. `$ npm install @sooni-hooks/use-fullscreen`
2. Add `import useFullscreen from "@sooni-hooks/use-fullscreen"` in your script.
3. Done!

## How to use
**useFullscreen** takes `fullscreenCallback` function as an argument. `fullscreenCallback` takes Boolean argument. The example of `fullscreenCallback` is:
```js
const fullscreenCallback = (isFull) => {
  if (isFull){
    console.log("Fullscreen")
  } else {
    console.log("Not Fullscreen")
  }
}
```
You can use this callback function as a Fullscreen handler.

useFullscreen returns an object containing `element`, `onFullscreen`, `offFullscreen`.

- **element**: Reference of DOM element. Put it in  `ref` attribute.
- **onFullscreen**: Function that turn on the fullscreen mode.
- **offFullscreen**: Function that turn off the fullscreen mode.

# Example
```js
function App() {
  const handleFullscreen = (isFull) => {
    if (isFull) {
      console.log("Fullscreen");
    } else {
      console.log("Not Fullscreen");
    }
  };
  const { element, onFullscreen, offFullscreen } = useFullscreen(
    handleFullscreen
  );
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://via.placeholder.com/300" />
        <button onClick={onFullscreen}>Full</button>
        <button onClick={offFullscreen}>Exit</button>
      </div>
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