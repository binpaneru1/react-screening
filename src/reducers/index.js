import { combineReducers } from 'redux';
import {buttonChange} from './buttonChange.reducer'
 

const rootReducer = combineReducers({
	buttonChange,
});

export default rootReducer;
