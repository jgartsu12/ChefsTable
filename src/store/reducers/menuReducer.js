import { SET_SOUP_ITEMS } from '../actions/types';

const INITAL_STATE = {
    soups: []
}

export default function(state=INITAL_STATE, action) {
    switch (action.type) {
        case SET_SOUP_ITEMS:
            return {
                ...state,
            }
        default: 
            return state;
    }
}