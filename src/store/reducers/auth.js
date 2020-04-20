import * as types from '../actions/types';
import { updateAuth } from '../redux_helpers/redux_helpers'

const initialState = {
    token: null,
    error: null,
    isLoading: false,
    // loggedInStatus: false
}

const authStart = (state) => {
    return updateAuth(state, {
        error: null,
        isLoading: true
    });
}

const authSuccess = (state, action) => {
    return updateAuth(state, {
        token: action.token,
        error: null,
        isLoading: true,
        // loggedInStatus: true
    });
}

const authFail = (state, action) => {
    return updateAuth(state, {
        error: action.error,
        // isLoading: false
    });
}

const authLogout = (state) => {
    return updateAuth(state, {
        token: null,
        // loggedInStatus: false,
        // isLoading: true
    });
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_START: 
            return authStart(state, action);
        case types.AUTH_SUCCESS:
            return authSuccess(state, action);
        case types.AUTH_FAIL: 
            return authFail(state, action);
        case types.AUTH_LOGOUT:
            return authLogout(state, action);
        default:
            return state;
    }
}

export default reducers;