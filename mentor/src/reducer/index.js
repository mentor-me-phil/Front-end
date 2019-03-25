import { 
    LOGIN_START, 
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "../actions";

const initialState = {
    mentore: [],
    loggingIn: false,
    error: '',
    token: localStorage.setItem('token')
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
            ...state,
            loggingIn: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                token: action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }
    }
}