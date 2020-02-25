import { useReducer } from "react";

const useAPIReducer = (reducer, initialState) => {
  const APIState = {
    loading: true,
    error: false,
    data: initialState
  };

  const APIReducer = (state, action) => {
    const data = reducer(state, action);
    switch (action.type) {
      case "ERROR": {
        return {
          data: null,
          loading: false,
          error: action.payload.error
        };
      }

      case "LOADING": {
        return {
          data: null,
          error: null,
          loading: true
        };
      }
      default:
        return {
          data,
          loading: false,
          error: false
        };
    }
  };
  return useReducer(APIReducer, APIState);
};

export default useAPIReducer;
