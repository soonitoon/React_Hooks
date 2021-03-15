export const useConfirm = (message = "Are you sure?", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") {
    return;
  }
  if (typeof onCancel !== "function") {
    return;
  }
  const handleConfirm = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return handleConfirm;
};
