import { useReducer } from "react";

const reducer = (prevState, newState) => ({ ...prevState, ...newState });

const useSetState = initialState => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setState = updatedState => dispatch(updatedState);

  return [state, setState];
};

export default useSetState;
