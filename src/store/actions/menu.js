import { SET_MENU_ITEMS } from './types';

import axios from 'axios';

export function fetchMenuItems() {
    return function(dispatch) {
        axios.get('https://jgartsu12.pythonanywhere.com/api/')
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: SET_MENU_ITEMS,
                    payload: response.data
            })
            .catch(error => {
                console.log('fetchMenuItems failed', error)
            })
        });
    }
}