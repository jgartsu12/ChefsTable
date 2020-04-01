import { SET_MENU_ITEMS, SET_SOUP_ITEMS } from './types';

const INITAL_STATE = {
    menus: [],
    soups: []
}

export default function(state=INITAL_STATE, action) {
    switch (action.type) {
        case SET_MENU_ITEMS:
            return [...state, menus: action.payload]
            // break;
        case SET_SOUP_ITEMS:
            return [...state, soups,: action.payload];
    }
}