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