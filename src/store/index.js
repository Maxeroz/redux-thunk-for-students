import { applyMiddleware, createStore } from "redux";
import { customerReducer } from "./customerReduser";
import { thunk } from "redux-thunk";

// Вторым аргументом назначить MIDDLEWARE/THUNK.
export const store = createStore(customerReducer, applyMiddleware(thunk));
