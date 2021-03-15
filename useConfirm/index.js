const useConfirm = (onConfirm, onCancel, message = "Are you sure?") => {
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

export default useConfirm;
