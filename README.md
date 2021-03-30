# React Hooks

Useful Hooks for creating React-pages.

## Hook List

- [X] useBeforeLeave
- [X] useClick
- [X] useConfirm
- [X] useFadeIn
- [X] useFullscreen
- [X] useInput
- [X] useNetwork
- [X] useNotification
- [X] usePreventLeave
- [X] useScroll
- [X] useTabs
- [X] useTitle
- [X] useAxios

# useTitle
React-hook to change HTML title easy way.

## Notice
**useTitle** is custom React-Hook; So it works on only **React environment**.

## Installation
1. `$ npm install @sooni-hooks/use-title`
2. Add `import useTitle from "@sooni-hooks/use-title"` in your script.
3. Done!

## How to use
**useTitle** returns `setTitle()`. setTitle takes HTML title as argument. If you put a HTML title in the function, the HTML title is automatically changed!

## Example

```js
function App() {
    const setTitle = useTitle("defaultTitle");
    return (
        <div className="App">
        	<h1 onClick={()=>setTitle("changedTitle")}></h1>
        </div>
    );
}
```
In the example code, if user clicks `h1`, HTML title will be changed "defaultTitle" to "changedTitle".

## Development environment setting

1. First, you need to install **NPM**
   Linux : `$ sudo apt install npm`
   Windows : Go to download link https://nodejs.org/en/download/

2. Install **react** and **react-dom**
   `$ npm i react react-dom`

## Full code

```js
import { useEffect, useState } from "react";

const useTitle = (init) => {
  const [title, setTitle] = useState(init);
  const updateTitle = () => {
    const HTML_title = document.querySelector("title");
    HTML_title.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default useTitle;

```