import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./auth/reducer";
import { todoReducer } from "./todos/reducer";



const rootReducer = combineReducers( {
    auth: authReducer,
    app: todoReducer
} );

const logger = (state) => (next) => (action) => {
    console.log("dispatching action", action, next, state);
    const val = next(action);
    console.log("exciting logger");
    return val
}

const logger2 = (state) => (next) => (action) => {
    console.log("dispatching action from logger 2", action, next, state);
    const val = next(action);
    console.log("exciting logger2");
    return val
}

export const store = legacy_createStore(
    rootReducer, 
    applyMiddleware(logger, logger2)
    // window.__REDUX_DEVTOOLS_EXTENSION_ || window.__REDUX_DEVTOOLS_EXTENSION__()
    );
