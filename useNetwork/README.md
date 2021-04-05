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