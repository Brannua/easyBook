/**
 * @desc reducer
 */

// import { combineReducers } from 'redux-immutable';

import { combineReducers } from 'redux';
import headerReducer from '../components/header/store/reducer';

const reducer = combineReducers({
  headerReducer
});

export default reducer;
