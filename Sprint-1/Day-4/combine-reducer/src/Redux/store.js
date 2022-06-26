import { legacy_createStore, combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { todoReducer } from "./todos/reducer";



const rootReducer = combineReducers( {
    auth: authReducer,
    app: todoReducer
} )

export const store = legacy_createStore(rootReducer);
