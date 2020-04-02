import { combineReducers } from 'redux';

import { soups } from './menuReducer';

const rootReducer = combineReducers({
    soups
});

export default rootReducer;