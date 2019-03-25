import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = creds = dispatch => {
    dispatch({ type: LOGIN_START });
    axios
        .post('https://bw-mentor-me.herokuapp.com/api/register')
        .then(response => {
            localStorage.setItem('token', response.data);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data })
        })
        .catch(error => {console.log(error)
            dispatch = ({ type: LOGIN_FAIL, payload: error })
        })
}