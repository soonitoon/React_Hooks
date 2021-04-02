# usePreventLeave
JavaScript Function that prevent user from leaving current page.

## Notice
**usePreventLeave** is in the repository "React_Hooks", but it is not React Hook!🙃 So it doesn't have any dependency modules.

## Installation
1. `$ npm install @sooni-hooks/use-prevent-leave`
2. Add `import usePreventLeave from "@sooni-hooks/use-prevent-leave"` in your script.
3. Done!

## How to use
**usePreventLeave** returns `enablePrevent()` and `disablePrevent()`. You can call `enablePrevent()` when you want to prevent user from leaving current page; and the opposite is possible as well.

## Example
```js
function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={() => enablePrevent()}>enable</button>
      <button onClick={() => disablePrevent()}>disable</button>
    </div>
  );
}
```
In the example code, If user clicks `eable` button, browser alerts user when user closes the tab. The prevention is disabled if user clicks `disable` button.

## Development environment setting
You need to install **NPM**
- Linux : `$ sudo apt install npm`
- Windows : Go to download link https://nodejs.org/en/download/

## Full code
```js
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };
  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
```