import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import mainReducer from './mainReducer';
const rootReducer = combineReducers({
    form: formReducer,
    mainReducer
});

export default rootReducer;