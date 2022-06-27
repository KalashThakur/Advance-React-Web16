import { reducer } from "./reducer";
import { legacy_createStore, compose, applyMiddleware } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const customMiddleware = (store) => (next) => (action) => {
//   console.log("action", action);
if(typeof action === "function")
{
   return action(store.dispatch)
}
  return next(action);  //if (typeof action === "object")
};

export const store = legacy_createStore(reducer, 
    composeEnhancers(applyMiddleware(customMiddleware))
    );
