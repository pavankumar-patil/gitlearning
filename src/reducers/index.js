import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import { routerReducer } from 'react-router-redux';
const rootReducers=combineReducers({
LoginReducerC:LoginReducer,
routerReducer:routerReducer
});

export default rootReducers;
