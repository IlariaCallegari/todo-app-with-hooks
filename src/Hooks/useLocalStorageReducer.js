import { useReducer, useEffect } from "react";
import todoReducer from "../Reducers/todoReducer";

function useLocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(todoReducer, defaultVal, () => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key)) || defaultVal;
    } catch (e) {
      value = defaultVal;
    }
    return value;
  });
  useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  
  return [state, dispatch]
}

export default useLocalStorageReducer;