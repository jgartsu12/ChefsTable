import { SET_SOUP_ITEMS } from '../actions/types';

const INITAL_STATE = {
    soups: [],
    updatedSoups: []
}

export default function(state=INITAL_STATE, action) {
    switch (action.type) {
        case SET_SOUP_ITEMS:
            const updatedSoups = action.payload;
            return {
                ...state,
                updatedSoups
            }
        default: 
            return state;
    }
}