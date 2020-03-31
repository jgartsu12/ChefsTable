import * as types from '../actions/types';
import { updateAuth } from '../redux_helpers/redux_helpers'

const initialState = {
    token: null,
    error: null,
    isLoading: false
}

const authStart = (state, action) => {
    return updateAuth(state, {
        error: null,
        isLoading: true
    });
}

const authSucess = (state, action) => {
    return updateAuth(state, {
        token: action.token,
        error: null,
        isLoading: false
    });
}

const authFail = (state, action) => {
    return updateAuth(state, {
        error: action.error,
        isLoading: false
    });
}

const authLogout = (state, action) => {
    return updateAuth(state, {
        token: null
    });
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case types.AUTH_START: return authStart(state, action);
        case types.AUTH_SUCCESS: return authSucess(state, action);
        case types.AUTH_FAIL: return authFail(state, action);
        case types.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
}

export default reducer;