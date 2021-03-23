export const useNotification = (title, options) => {
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
