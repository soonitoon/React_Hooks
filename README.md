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

# useTabs
React-hook to change tab easy way.

## Notice
**useTitle** is custom React-Hook; So it works on only **React environment**.

## Installation
1. `$ npm install @sooni-hooks/use-tabs`
2. Add `import useTabs from "@sooni-hooks/use-tabs"` in your script.
3. Done!

## How to use
**useTabs** takes two arguments. One is `default tab index`, the other is `tab content array`. This is example of "tab content array":
```js
const tabContentArray = [
  {
    title: "First tab",
    content: "Hello! I'm first tab",
  },
  {
    title: "Second tab",
    content: "Hello! I'm second tab",
  },
];
```
useTabs checks whether the `tab content array` is valid. If it is not, the Hook is terminated.

useTabs returns object that contains `currentContent` and `changeTab()`. `changeTab()` takes **tab index** as argument. 

## Example

```js
function App() {
  const tabContentArray = [
    {
      title: "First tab",
      content: "Hello! I'm first tab",
    },
    {
      title: "Second tab",
      content: "Hello! I'm second tab",
    },
  ];
  const { currentContent, changeTab } = useTabs(0, tabContentArray);
  const { title, content } = currentContent;
  return (
    <div className="App">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => changeTab(1)}>next</button>
    </div>
  );
}
```
In the example code, if user clicks `button`, tab index is changed 0 to 1. Then the `title` and `content` are automatically changed.

## Development environment setting

1. First, you need to install **NPM**
   Linux : `$ sudo apt install npm`
   Windows : Go to download link https://nodejs.org/en/download/

2. Install **react** and **react-dom**
   `$ npm i react react-dom`

## Full code

```js
import { useState } from "react";

const useTabs = (init, array) => {
  if (!array || !Array.isArray(array)) {
    return;
  }
  const [currentTab, setCurrentTab] = useState(init);
  const changeTab = (value) => {
    setCurrentTab(value);
  };
  return {
    currentContent: array[currentTab],
    changeTab,
  };
};

export default useTabs;
```

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