import { combineReducers } from 'redux';

import {  menus, soups } from './menuReducer';

const rootReducer = combineReducers({
    menus,
    soups
});

export default rootReducer;