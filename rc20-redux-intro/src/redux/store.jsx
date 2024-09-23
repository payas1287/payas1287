import {  combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";


const topluReducer = combineReducers({
    counterReducer:counterReducer,
    todoReducer: todoReducer

})

export const store = createStore(topluReducer)