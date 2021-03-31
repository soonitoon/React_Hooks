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