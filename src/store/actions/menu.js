import { SET_MENU_ITEMS, SET_SOUP_ITEMS } from './types';

import axios from 'axios';

export function fetchMenuItems() {
    return function(dispatch) {
        axios.get('http://127.0.0.1:8000/api/menus')
            .then(response => {
                console.log(response.data.menus);
                dispatch({
                    type: SET_MENU_ITEMS,
                    payload: response.data.menus
            });
        });
    }
}

export function fetchSoupItems() {
    return function(dispatch) {
        axios.get('http://127.0.0.1:8000/api/soups')
            .then(response => {
                console.log(response.data.soups);
                dispatch({
                    type: SET_SOUP_ITEMS,
                    payload: response.data.soups
            });
        });
    }
}