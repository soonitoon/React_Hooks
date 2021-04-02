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