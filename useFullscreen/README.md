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