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

# useNotification
Javascript Function that sends browser message to the user.

## Notice
**useNotification** is in the repository "React_Hooks", but it is not React Hook!🙃 So it doesn't have any dependency modules.

## Installation
1. `$ npm install @sooni-hooks/use-notification`
2. Add `import useNotification from "@sooni-hooks/use-notification"` in your script.
3. Done!

## How to use
**useNotification** takes two arguments;
1. **title**: Message title.
2. **options**: An object containing custom setting.

The possible options are:

- **lang**: The notification's language, as specified using a DOMString representing a BCP 47 language tag. See the Sitepoint ISO 2 letter language codes page for a simple reference.
- **body**: A DOMString representing the body text of the notification, which is displayed below the title.
- **tag**: A DOMString representing an identifying tag for the notification.
- **icon**: A USVString containing the URL of an icon to be displayed in the notification.
- **image**: a USVString containing the URL of an image to be displayed in the notification.
- **data**: Arbitrary data that you want associated with the notification. This can be of any data type.
- **vibrate**: A vibration pattern for the device's vibration hardware to emit with the notification.
- **silent**: A Boolean specifying whether the notification is silent (no sounds or vibrations issued), regardless of the device settings. The default is false, which means it won't be silent.

`useNotification` returns `sandNotification()`. It sends a notification permission request to the user. It makes browser message if user agrees.

If you want to get more information about `Notification` object, visite **MDN**.

Link: https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification

## Example
```js
function App() {
  const option = {
    body: "Hello!",
  };
  const sandNotification = useNotification("I'm message", option);
  return (
    <div className="App">
      <button onClick={() => sandNotification()}>sand message</button>
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
const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const sandNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission !== "granted") {
          return;
        } else {
          new Notification(title, options);
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return sandNotification;
};

export default useNotification;
```

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

# useScroll
React-Hook that catches user's scroll position easy way.

## Notice
**useTitle** is custom React-Hook; So it works on only **React environment**.

## Installation
1. `$ npm install @sooni-hooks/use-scroll`
2. Add `import useScroll from "@sooni-hooks/use-scroll"` in your script.
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