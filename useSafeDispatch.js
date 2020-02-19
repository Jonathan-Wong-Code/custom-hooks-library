import { useReducer, useEffect, useRef, useCallback } from "react";
import reducer from "./../reducers/stateReducer";

function useSafeDispatch(initialState) {
  const [state, setState] = useReducer(reducer, initialState);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  const setSafeState = useCallback(
    (...args) => {
      return mountedRef.current && setState(...args);
    },
    [setState]
  );
  return [state, setSafeState];
}

export default useSafeDispatch;
