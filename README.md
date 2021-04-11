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

# useFadeIn
React-Hook to use Fade-In effect easy way

## Notice
**useInput** is custom React-Hook; So it works on only **React environment**.

## Installation
1. `$ npm install @sooni-hooks/use-fade-in`
2. Add `import useFadeIn from "@sooni-hooks/use-fade-in"` in your script.
3. Done!

## How to use
**useFadeIn** takes two argument; `duration` and `delay`. Each argument is property of CSS transition. The default value is:
- duration = 2
- delay = 0

`useFadeIn` returns a object that consists of attributes of DOM element. You'll use this object in the DOM element with `spead operator`.

## Example
```js
function App() {
  const attributes = useFadeIn(3, 1);
  return (
    <div className="App">
      <h1 {...attributes}>Hello Hook!</h1>
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

## Full code
```js
import { useEffect, useRef } from "react";

const useFadeIn = (duration = 2, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    const { current } = element;
    if (current) {
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
```

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
- **onFullscreen**: Function that turns on the fullscreen mode.
- **offFullscreen**: Function that turns off the fullscreen mode.

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
  const { element, onFullscreen, offFullscreen } = useFullscreen(handleFullscreen);
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

# Full code
```js
import { useRef } from "react";

const useFullscreen = (fullscreenCallback) => {
  const element = useRef();
  const runCallback = (isFull) => {
    if (fullscreenCallback && typeof fullscreenCallback === "function") {
      fullscreenCallback(isFull);
    }
  };
  const onFullscreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
    }
    runCallback(true);
  };
  const offFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullscreen) {
      document.mozCancelFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCallback(false);
  };

  return { element, onFullscreen, offFullscreen };
};

export default useFullscreen;
```

# useInput
React-Hook to get user's input value.

## Notice
**useInput** is custom React-Hook; So it works on only **React environment**.

## Installation
1. `$ npm install @sooni-hooks/use-input`
2. Add `import useInput from "@sooni-hooks/use-input"` in your script.
3. Done!

## How to use
**useInput** takes two arguments. One is `init value`, the other is `verification function`. `init value` is default value of input. `verification function` checks the input value and returns Boolean value. The example of `verification function` is:
```js
const verify = (value) => {
  if (typeof(value) === "string"){
    return true
  } else {
    return false
  }
}
```

useInput returns a object containing `input value` and `onChange function`.
```js
{
  value: value,
  onChange: onChange
}
```
They have same name as JSX attributes. So you can use this object inside of JSX tag with `spread operator`.

## Example
```js
function App() {
  const verify = (value) => {
    if (typeof value === "string") {
      return true;
    } else {
      return false;
    }
  };
  const attributes = useInput("name", verify);
  return (
    <div className="App">
      <h1>{attributes.value}</h1>
      <input {...attributes}></input>
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

## Full code
```js
import { useState } from "react";

const useInput = (init, verification) => {
  const [value, setValue] = useState(init);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof verification === "function") {
      willUpdate = verification(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return {
    value,
    onChange,
  };
};

export default useInput;
```

# useNetwork
React-Hook that can catch user's network status.

## Notice
**useNetwork** is custom React-Hook; So it works on only **React environment**.

## Installation
1. `$ npm install @sooni-hooks/use-network`
2. Add `import useNetwork from "@sooni-hooks/use-network"` in your script.
3. Done!

## How to use
**useNetwork** takes `onChange function` as argument. This function takes the Boolean value. And it works according to the Boolean value. Example is:
```js
const onChange = (isOnline) => {
  if (isOnline){
    console.log("Online");
  } else {
    console.log("Offline");
  }
}
```
Also useNetwork returns `isOnline`. This is Boolean value. If user's network is connected, `isOnline`'s value is `true`. If user's network is unconnected, `isOnline`'s value is `false`.

## Example
```js
function App() {
  const onChange = (isOnline) => {
    console.log(isOnline ? "online" : "offline");
  };
  const isOnline = useNetwork(onChange);
  return (
    <div className="App">
      <h1>{JSON.stringify(isOnline)}</h1>
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

## Full code
```js
import { useEffect, useState } from "react";

const useNetwork = (onChange) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setIsOnline(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return isOnline;
};

export default useNetwork;
```

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