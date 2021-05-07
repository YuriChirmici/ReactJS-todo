import {createStore, combineReducers} from "redux";
import tasksReducer from "./tasks-reducer.js"

let reducers = combineReducers({
	tasksPage: tasksReducer,
});

let store = createStore(reducers);

export default store;