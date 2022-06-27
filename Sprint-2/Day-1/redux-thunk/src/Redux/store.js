import { compose, legacy_createStore } from 'redux';
import { reducer } from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_ || window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
export const store =  legacy_createStore(reducer, composeEnhancers)