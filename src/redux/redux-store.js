import {createStore, combineReducers} from "redux";
import tasksReducer from "./tasks-reducer.js";
import colorsReducer from "./colors-reducer.js";

let reducers = combineReducers({
	tasksPage: tasksReducer,
	colors: colorsReducer,
});

let store = createStore(reducers);

export default store;