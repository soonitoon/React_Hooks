# useClick
React-Hook that connects the function to the DOM element.

## Notice
- **useInput** is custom React-Hook; So it works on only **React environment**.
- I know that the function of useClick is same as `onClick` attribute.🙃 It is a functional programming practice.

## Installation
1. `$ npm install @sooni-hooks/use-click`
2. Add `import useClick from "@sooni-hooks/use-click"` in your script.
3. Done!

## How to use
**useClick** takes `handleClick()` as an argument. `handleClick()` is called when user click the element.

`useClick` returns `element` that is reference of the DOM element.