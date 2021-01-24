export function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function removeItemAtIndex(arr, index) {
  return arr.filter(function (value, arrIndex) {
    return index !== arrIndex;
  });
}

export function keyListener(callback) {
  const listener = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      callback();
    }
  };
  document.addEventListener("keydown", listener);

  return () => {
    document.removeEventListener("keydown", listener);
  };
}
