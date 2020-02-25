import { useCallback } from "react";
import useAPIReducer from "./useAPIReducer";
const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useAPIReducer(reducer, initialState);
  const enhancedDispatch = useCallback(
    action => {
      if (typeof action === "function") {
        action(dispatch);
      } else {
        dispatch(action);
      }
    },
    [dispatch]
  );

  return [state, enhancedDispatch];
};

export default useThunkReducer;
