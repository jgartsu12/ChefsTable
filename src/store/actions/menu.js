import { SET_MENU_ITEMS } from './types';

import axios from 'axios';

export function fetchMenuItems() {
    return function(dispatch) {
        axios.get('http://127.0.0.1:8000/api/')
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