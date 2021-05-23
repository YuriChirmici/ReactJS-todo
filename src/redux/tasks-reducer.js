const UPDATE_TASK_TEXT = "UPDATE_TASK_TEXT";
const ADD_TASK = "ADD_TASK";
const TASK_DELETE = "TASK_DELETE"
const UPDATE_TASK_STATE = "UPDATE_TASK_STATE";
const UPDATE_CURRENT_PAGE = "UPDATE_CURRENT_PAGE";

let initialState = {
	taskCounter: 0,
	currentText: "",
	tasks: [
	],
	pageSize: 6,
	currentPage: 1,
}

const setStateIntoLocalStorage = (state) => {
	let jState = JSON.stringify(state)
	localStorage.setItem("tasks", jState)
}

if (localStorage.getItem("tasks") === null) {
	setStateIntoLocalStorage(initialState);
} else {
	initialState = JSON.parse(localStorage.getItem("tasks"));
}

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
			let newTask = {
				taskId: state.taskCounter + 1,
				text: state.currentText,
				isChecked: false,
			}
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
	setStateIntoLocalStorage(newState);
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