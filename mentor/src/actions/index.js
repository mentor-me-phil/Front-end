import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const login = () => dispatch => {
  dispatch = { type: LOGIN_START };
  axios
    .post("https://bw-mentor-me.herokuapp.com/api/login")
    .then(response => {
      localStorage.setItem("token", response.data);
      dispatch = { type: LOGIN_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: LOGIN_FAIL, payload: error };
    });
};

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const register = () => dispatch => {
  dispatch = { type: REGISTER_START };
  axios
    .post("https://bw-mentor-me.herokuapp.com/api/register")
    .then(response => {
      localStorage.setItem("token", response.data);
      dispatch = { type: REGISTER_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: REGISTER_FAIL, payload: error };
    });
};

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

export const getUser = () => dispatch => {
  dispatch = { type: GET_USER_START };
  axios
    .get("https://bw-mentor-me.herokuapp.com/api/users")
    .then(response => {
      dispatch = { type: GET_USER_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: GET_USER_FAIL, payload: error };
    });
};

export const GET_ID_START = "GET_ID_START";
export const GET_ID_SUCCESS = "GET_ID_SUCCESS";
export const GET_ID_FAIL = "GET_ID_FAIL";

export const getId = id => dispatch => {
  dispatch = { type: GET_ID_START };
  axios
    .get(`https://bw-mentor-me.herokuapp.com/api/users/${id}`)
    .then(response => {
      dispatch = { type: GET_ID_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: GET_ID_FAIL, payload: error };
    });
};

export const PATCH_START = "PATCH_START";
export const PATCH_SUCCESS = "PATCH_SUCCESS";
export const PATCH_FAIL = "PATCH_FAIL";

export const PATCH = id => dispatch => {
  dispatch = { type: PATCH_START };
  axios
    .put(`https://bw-mentor-me.herokuapp.com/api/users/${id}`)
    .then(response => {
      dispatch = { type: PATCH_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: PATCH_FAIL, payload: error };
    });
};

export const GET_QUESTIONS_START = "GET_QUESTIONS_START";
export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";
export const GET_QUESTIONS_FAIL = "GET_QUESTIONS_FAIL";

export const getQuestions = () => dispatch => {
  dispatch = { type: GET_QUESTIONS_START };
  axios
    .get("https://bw-mentor-me.herokuapp.com/api/questions")
    .then(response => {
      dispatch = { type: GET_QUESTIONS_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: GET_QUESTIONS_FAIL, payload: error };
    });
};

export const GET_ANSWERS_START = "GET_ANSWERS_START";
export const GET_ANSWERS_SUCCESS = "GET_ANSWERS_SUCCESS";
export const GET_ANSWERS_FAIL = "GET_ANSWERS_FAIL";

export const getAnswers = () => dispatch => {
  dispatch = { type: GET_ANSWERS_START };
  axios
    .get("https://bw-mentor-me.herokuapp.com/api/answers")
    .then(response => {
      dispatch = { type: GET_ANSWERS_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: GET_ANSWERS_FAIL, payload: error };
    });
};

export const GET_AID_START = "GET_AID_START";
export const GET_AID_SUCCESS = "GET_AID_SUCCESS";
export const GET_AID_FAIL = "GET_AID_FAIL";

export const getAnswersID = id => dispatch => {
  dispatch = { type: GET_AID_START };
  axios
    .get(`https://bw-mentor-me.herokuapp.com/api/answers/${id}`)
    .then(response => {
      dispatch = { type: GET_AID_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: GET_AID_FAIL, payload: error };
    });
};

export const ADD_POST_START = "ADD_POST_START";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAIL = "ADD_POST_FAIL";

export const addPost = () => dispatch => {
  dispatch = { type: ADD_POST_START };
  axios
    .post("https://bw-mentor-me.herokuapp.com/api/posts")
    .then(response => {
      dispatch = { type: ADD_POST_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: ADD_POST_FAIL, payload: error };
    });
};

export const ADD_ANSWERS_START = "ADD_ANSWERS_START";
export const ADD_ANSWERS_SUCCESS = "ADD_ANSWERS_SUCCESS";
export const ADD_ANSWERS_FAIL = "ADD_ANSWERS_FAIL";

export const addAnswers = () => dispatch => {
  dispatch = { type: ADD_ANSWERS_START };
  axios
    .post("https://bw-mentor-me.herokuapp.com/api/answers")
    .then(response => {
      dispatch = { type: ADD_ANSWERS_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: ADD_ANSWERS_FAIL, payload: error };
    });
};

export const GET_POSTS_START = "GET_POSTS_START";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";

export const getPost = id => dispatch => {
  dispatch = { type: GET_POSTS_START };
  axios
    .get(`https://bw-mentor-me.herokuapp.com/api/posts/${id}`)
    .then(response => {
      dispatch = { type: GET_POSTS_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: GET_POSTS_FAIL, payload: error };
    });
};

export const PATCH_ID_START = "PATCH_ID_START";
export const PATCH_ID_SUCCESS = "PATCH_ID_SUCCESS";
export const PATCH_ID_FAIL = "PATCH_ID_FAIL";

export const patchId = id => dispatch => {
  dispatch = { type: PATCH_ID_START };
  axios
    .put(`https://bw-mentor-me.herokuapp.com/api/users/${id}`)
    .then(response => {
      dispatch({ type: PATCH_ID_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: PATCH_ID_FAIL, payload: error };
    });
};

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const deleteUser = id => dispatch => {
  dispatch = { type: DELETE_USER_START };
  axios
    .delete(`https://bw-mentor-me.herokuapp.com/api/users/${id}`)
    .then(response => {
      dispatch = { type: DELETE_USER_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: DELETE_USER_FAIL, payload: error };
    });
};

export const DELETE_POST_START = "DELETE_POST_START";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAIL = "DELETE_POST_FAIL";

export const deletePost = id => dispatch => {
  dispatch = { type: DELETE_POST_START };
  axios
    .delete(`https://bw-mentor-me.herokuapp.com/api/posts/${id}`)
    .then(response => {
      dispatch = { type: DELETE_POST_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: DELETE_POST_FAIL, payload: error };
    });
};

export const GET_CONVO_START = "GET_CONVO_START";
export const GET_CONVO_SUCCESS = "GET_CONVO_SUCCESS";
export const GET_CONVO_FAIL = "GET_CONVO_FAIL";

export const getConvo = id => dispatch => {
  dispatch = { type: GET_CONVO_START };
  axios
    .get(`https://bw-mentor-me.herokuapp.com/api/conversations/${id}`)
    .then(response => {
      dispatch = { type: GET_CONVO_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: GET_CONVO_FAIL, payload: error };
    });
};

export const GET_CID_START = "GET_CID_START";
export const GET_CID_SUCCESS = "GET_CID_SUCCESS";
export const GET_CID_FAIL = "GET_CID_FAIL";

export const getCid = id => dispatch => {
  dispatch = { type: GET_CID_START };
  axios
    .get(`https://bw-mentor-me.herokuapp.com/api/conservations-list/${id}`)
    .then(response => {
      dispatch = { type: GET_CID_SUCCESS, payload: response.data };
    })
    .catch(error => {
      console.log(error);
      dispatch = { type: GET_CID_FAIL, payload: error };
    });
};
