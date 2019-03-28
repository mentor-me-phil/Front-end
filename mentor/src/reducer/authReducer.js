import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    GET_ID_START,
    GET_ID_SUCCESS,
    GET_ID_FAIL,
    PATCH_START,
    PATCH_SUCCESS,
    PATCH_FAIL,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
  } from "../actions";
  
  const initialState = {
    mentor: [],
    loggingIn: false,
    error: "",
    fetchingUser: false,
    fetchingId: false,
    token: ""
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loggingIn: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case LOGIN_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
      case REGISTER_START:
        return {
          ...state,
          loggingIn: true
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case REGISTER_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
      case GET_USER_START:
        return {
          ...state,
          fetchingUser: true
        };
      case GET_USER_SUCCESS:
        return {
          ...state,
          fetchingUser: false,
          token: action.payload
        };
      case GET_USER_FAIL:
        return {
          ...state,
          fetchingUser: false,
          error: action.payload
        };
      case GET_ID_START:
        return {
          ...state,
          fetchingId: true
        };
      case GET_ID_SUCCESS:
        return {
          ...state,
          fetchingId: false,
          token: action.payload
        };
      case GET_ID_FAIL:
        return {
          ...state,
          fetchingId: false,
          error: action.payload
        };
      case PATCH_START:
        return {
          ...state,
          loggingIn: true
        };
      case PATCH_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case PATCH_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
      case DELETE_USER_START:
        return {
          ...state,
          loggingIn: true
        };
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case DELETE_USER_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
    }
  };
  
  export default authReducer;