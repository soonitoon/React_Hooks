# useTabs
React-hook to change tab easy way.

## Notice
**useTabs** is custom React-Hook; So it works on only **React environment**.

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