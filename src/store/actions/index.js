import { SET_SOUP_ITEMS } from './types';

import axios from 'axios';

export function fetchSoups() {
    return function(dispatch) {
        axios.get('http://127.0.0.1:8000/api/soups')
            .then(response => {
                console.log(response.data.soups);
                dispatch({
                    type: SET_SOUP_ITEMS,
                    payload: response.data.soups
            })
        });
    }
}