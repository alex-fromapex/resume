import { combineReducers } from 'redux';
import { contactInfoReducer } from './contactinfo';
import { workHistoryReducer } from './work_history';

export default combineReducers({
    contactInfo: contactInfoReducer,
    workHistory: workHistoryReducer
});
