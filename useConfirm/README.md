# useConfirm
JavaScript function that can get user's confirm.

## Notice
**useNotification** is in the repository "React_Hooks", but it is not React Hook!🙃 So it doesn't have any dependency modules.

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