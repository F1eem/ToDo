import { combineReducers, createStore } from "redux";
import { ToDoReducer } from "./ToDoReducer";

let reducers = combineReducers({
  toDoPage: ToDoReducer,
});

let store = createStore(reducers);

export default store;
