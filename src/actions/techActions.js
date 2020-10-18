import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from "./types";

export const getTechs = () => {
  //beacuse of thunk middleware we can dispatch the func. to reducer rather than object
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch("/techs");
      const data = await res.json();
      //dispatch function called in order to update our state and call reducer for us which returns updated state
      //like in context const[state,dispatch]=useReducer(initialState,reducer)
      dispatch({
        type: GET_TECHS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
