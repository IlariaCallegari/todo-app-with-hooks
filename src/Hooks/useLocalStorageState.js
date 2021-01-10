//piece of state which is sinking with localstorage
import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
  //make pieace of state, based off of value in local storage
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key)) || defaultVal;
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  //use useEffect to update localStorage with state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
export default useLocalStorageState;
