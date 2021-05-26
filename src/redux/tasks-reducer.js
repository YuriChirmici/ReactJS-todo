import {setStateIntoLocalStorage, getStateFromLocalStorage}
	from "../helpers/localStorageSetter";

const UPDATE_TASK_TEXT = "tasks/UPDATE_TASK_TEXT";
const ADD_TASK = "tasks/ADD_TASK";
const TASK_DELETE = "tasks/TASK_DELETE"
const UPDATE_TASK_STATE = "tasks/UPDATE_TASK_STATE";
const UPDATE_CURRENT_PAGE = "tasks/UPDATE_CURRENT_PAGE";
const STORAGE_NAME = "todo/tasks";

let initialState = {
	taskCounter: 0,
	currentText: "",
	tasks: [
	],
	pageSize: 6,
	currentPage: 1,
}

initialState = getStateFromLocalStorage(initialState, STORAGE_NAME)

const newTaskCreator = (state) => {
	return {
		taskId: state.taskCounter + 1,
		text: state.currentText,
		isChecked: false,
	}
}

const tasksReducer = (state = initialState, action) => {
	let newState = state;
	switch(action.type) {
		case UPDATE_TASK_TEXT:
			newState = {
				...state, 
				currentText: action.currentText
			}
			break;
		case ADD_TASK: 
			newState = {
				...state,
				taskCounter: state.taskCounter + 1,
				tasks: [...state.tasks, newTaskCreator(state)],
			}
			break;
		case TASK_DELETE:
			newState = {
				...state, 
				tasks: state.tasks.filter( task => task.taskId !== action.taskId),
			}
			break;
		case UPDATE_TASK_STATE:{
			let newTasks = state.tasks.map(task => {
				let newTask = {...task}
				if (newTask.taskId === action.taskId) {
					newTask.isChecked = action.isChecked;
				}
				return newTask;
			});

			newState = {
				...state, 
				tasks: newTasks,
			}
			break;
		}
		case UPDATE_CURRENT_PAGE: 
			newState = {
				...state,
				currentPage: action.currentPage,
			}
			break;
		default: 
			newState = state;
			break;
	}
	setStateIntoLocalStorage(newState, STORAGE_NAME);
	return newState;
}

export const updateTaskText = (currentText) => {
	return {
		type: UPDATE_TASK_TEXT,
		currentText,
	}
}

export const addNewTask = () => {
	return {type: ADD_TASK}
}

export const deleteTask = (taskId) => {
	return {type: TASK_DELETE, taskId}
}

export const updateTaskState = (isChecked, taskId) => {
	return {type: UPDATE_TASK_STATE, isChecked, taskId}
}

export const updateCurrentPage = (currentPage) => {
	return {type: UPDATE_CURRENT_PAGE, currentPage}
}

export default tasksReducer;