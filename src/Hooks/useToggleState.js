import {useState} from "react";

const useToggleState = (intialVal = false) => {
    const [state, setState] = useState(intialVal);
    const toggle = () => {
        setState(!state);
    }
    return [state, toggle];
}

export default useToggleState;