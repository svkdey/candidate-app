import { combineReducers } from 'redux';
import applicationReducer from './applicationsReducer';

export default combineReducers({
    applications: applicationReducer,

})