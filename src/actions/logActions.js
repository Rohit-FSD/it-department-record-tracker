import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  UPDATE_LOG,
  CLEAR_CURRENT,
  SEARCH_LOGS,
} from "./types";

export const getLogs = () => {
  //beacuse of thunk middleware we can dispatch the func. to reducer rather than object
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch("/logs");
      const data = await res.json();
      //dispatch function called in order to update our state and call reducer for us which returns updated state
      //like in context const[state,dispatch]=useReducer(initialState,reducer)
      dispatch({
        type: GET_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

//add new log
export const addLog = (log) => {
  //beacuse of thunk middleware we can dispatch the func. to reducer rather than object
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch("/logs", {
        method: "POST",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      //dispatch called in order to update our state and call reducer for us
      dispatch({
        type: ADD_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const deleteLog = (id) => {
  //beacuse of thunk middleware we can dispatch the func. to reducer rather than object
  return async (dispatch) => {
    try {
      setLoading();
      await fetch(`/logs/${id}`, {
        method: "DELETE",
      });

      //dispatch function called in order to update our state and call reducer for us which returns updated state
      //like in context const[state,dispatch]=useReducer(initialState,reducer)
      dispatch({
        type: DELETE_LOG,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const updateLog = (log) => {
  //beacuse of thunk middleware we can dispatch the func. to reducer rather than object
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch(`/logs/${log.id}`, {
        method: "PUT",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      //dispatch function called in order to update our state and call reducer for us which returns updated state
      //like in context const[state,dispatch]=useReducer(initialState,reducer)
      dispatch({
        type: UPDATE_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const searchLogs = (text) => {
  //beacuse of thunk middleware we can dispatch the func. to reducer rather than object
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch(`/logs?q=${text}`);
      const data = await res.json();
      //dispatch function called in order to update our state and call reducer for us which returns updated state
      //like in context const[state,dispatch]=useReducer(initialState,reducer)
      dispatch({
        type: SEARCH_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
