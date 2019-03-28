import {
    GET_QUESTIONS_START,
    GET_QUESTIONS_SUCCESS,
    GET_QUESTIONS_FAIL,
    GET_ANSWERS_START,
    GET_ANSWERS_SUCCESS,
    GET_ANSWERS_FAIL,
    GET_QID_START,
    GET_QID_SUCCESS,
    GET_QID_FAIL,
    ADD_POST_START,
    ADD_POST_SUCCESS,
    ADD_POST_FAIL,
    ADD_ANSWERS_START,
    ADD_ANSWERS_SUCCESS,
    ADD_ANSWERS_FAIL,
    GET_POSTS_START,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    PATCH_ID_START,
    PATCH_ID_SUCCESS,
    PATCH_ID_FAIL,
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL,
    GET_CONVO_START,
    GET_CONVO_SUCCESS,
    GET_CONVO_FAIL,
    GET_CID_START,
    GET_CID_SUCCESS,
    GET_CID_FAIL
  } from "../actions";
  
  const initialState = {
    mentore: [],
    loggingIn: false,
    error: "",
    token: localStorage.setItem("token")
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_QUESTIONS_START:
        return {
          ...state,
          loggingIn: true
        };
      case GET_QUESTIONS_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case GET_QUESTIONS_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
      case GET_ANSWERS_START:
        return {
          ...state,
          loggingIn: true
        };
      case GET_ANSWERS_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case GET_ANSWERS_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
      case GET_QID_START:
        return {
          ...state,
          loggingIn: true
        };
      case GET_QID_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case GET_QID_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
      case ADD_POST_START:
        return {
          ...state,
          loggingIn: true
        };
      case ADD_POST_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case ADD_POST_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
      case ADD_ANSWERS_START:
        return {
          ...state,
          loggingIn: true
        };
      case ADD_ANSWERS_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case ADD_ANSWERS_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
      case GET_POSTS_START:
        return {
          ...state,
          loggingIn: true
        };
      case GET_POSTS_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case GET_POSTS_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
      case PATCH_ID_START:
        return {
          ...state,
          loggingIn: true
        };
      case PATCH_ID_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case PATCH_ID_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
      case GET_CONVO_START:
        return {
          ...state,
          loggingIn: true
        };
      case GET_CONVO_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case GET_CONVO_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
      case GET_CID_START:
        return {
          ...state,
          loggingIn: true
        };
      case GET_CID_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case GET_CID_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
      case DELETE_POST_START:
        return {
          ...state,
          loggingIn: true
        };
      case DELETE_POST_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };
      case DELETE_POST_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
    }
  };
  