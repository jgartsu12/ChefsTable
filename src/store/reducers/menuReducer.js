import { SET_MENU_ITEMS, SET_SOUP_ITEMS } from '../actions/types';

const INITAL_STATE = {
    menus: [],
    updatedMenus: [],

    soups: [],
    updatedSoups: []
}

export default function(state=INITAL_STATE, action) {
    switch (action.type) {
        case SET_MENU_ITEMS:
            const updatedMenus = action.payload;
            return {
                ...state, 
                updatedMenus
            }
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