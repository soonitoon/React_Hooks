# useConfirm
JavaScript function that can sand browser confirm to the user.

## Notice
**useAxios** is in the repository "React_Hooks", but it is not React Hook!🙃 So it doesn't have any dependency modules.

## Installation
1. `$ npm install @sooni-hooks/use-confirm`
2. Add `import useConfirm from "@sooni-hooks/use-confirm"` in your script.
3. Done!

## How to use
**useConfirm** has three properties.
- `onConfirm` : Callback function that is called when confirm event is happened.
- `onCancel` : Callback function that is called when confirm is rejected by user.
- `message` : The String that you want to show on browser confirm window.

`useConfirm` returns `handleConfirm()`. It contains two functions and message that you gave to `useConfirm` as a property. It makes confirm event and runs event handler automatically when you call it.

## Example
```js
function App() {
  const onConfirm = () => console.log("OK");
  const onCancel = () => console.log("Nope");
  const handleConfirm = useConfrim(onConfirm, onCancel, "Sure?");
  return (
    <div classname="App">
      <button onClick={handleConfirm}>click</button>
    </div>
  );
}
```

## Development environment setting

You need to install **NPM**
- Linux : `$ sudo apt install npm`
- Windows : Go to download link https://nodejs.org/en/download/

## Full code
```js
const useConfirm = (onConfirm, onCancel, message = "Are you sure?") => {
  if (typeof onConfirm !== "function") {
    return;
  }
  if (typeof onCancel !== "function") {
    return;
  }
  const handleConfirm = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return handleConfirm;
};

export default useConfirm;
```