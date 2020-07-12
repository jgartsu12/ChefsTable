import { SET_SOUP_ITEMS } from './types';

import axios from 'axios';

export function fetchSoups() {
    return function(dispatch) {
        axios.get('https://jgartsu12.pythonanywhere.com/api/soups')
            .then(response => {
                console.log(response.data.soups);
                dispatch({
                    type: SET_SOUP_ITEMS,
                    payload: response.data.soups
            })
            .catch(error => {
                console.log('fetchSoups failed', error)
            })
        });
    }
}