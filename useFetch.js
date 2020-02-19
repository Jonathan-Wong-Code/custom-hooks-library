import { useReducer, useEffect } from "react";

const initialState = {
  response: null,
  loading: true,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING": {
      return {
        response: null,
        loading: true,
        error: null
      };
    }

    case "RESPONSE_COMPLETE": {
      return {
        response: action.payload.response,
        loading: null,
        error: null
      };
    }

    case "ERROR": {
      return {
        response: null,
        loading: null,
        error: action.payload.error
      };
    }
    default:
      return state;
  }
};

const useFetch = url => {
  const [{ error, loading, response }, dispatch] = useReducer(
    initialState,
    reducer
  );

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(response =>
        dispatch({ type: "RESPONSE_COMPLETE", payload: { response } })
      )
      .catch(error => dispatch({ type: "ERROR", payload: { error } }));
  }, []);

  return { error, loading, response };
};

export default useFetch;
