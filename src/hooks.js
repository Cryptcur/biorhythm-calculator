import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const getInitialValue = () => localStorage.getItem(key) ?? defaultValue;
  const [value, setValue] = useState(getInitialValue);
  const setAndStoreValue = newVal => {
    setValue(newVal);
    localStorage.setItem(key, newVal);
  };
  return [value, setAndStoreValue];
};
