import tasksReducer, {updateTaskText, addNewTask, deleteTask, 
	updateTaskState, updateCurrentPage} from "./tasks-reducer";

let state = {
	taskCounter: 1,
	currentText: "",
	tasks: [
		{
			taskId: 0,
			text: "hello",
			isChecked: false,
		},
	],
	pageSize: 6,
	currentPage: 1,
};

test("Current text should be changed", () => {
	let newText = "hi";
	let action = updateTaskText(newText);
	let newState = tasksReducer(state, action);
	expect(newState.currentText).toBe(newText);
});

test("Tasks length should be incremented", () => {
	let action = addNewTask();
	let newState = tasksReducer(state, action);
	expect(newState.tasks.length).toBe(2);
});

test("Tasks length should be decremented", () => {
	let taskId = 0;
	let action = deleteTask(taskId);
	let newState = tasksReducer(state, action);
	expect(newState.tasks.length).toBe(0);
});

test("Task state should be changed", () => {
	let isChecked = true;
	let taskId = 0;
	let action = updateTaskState(isChecked, taskId);
	let newState = tasksReducer(state, action);
	expect(newState.tasks[taskId].isChecked).toBe(isChecked);
});

test("Current page should be changed", () => {
	let currentPage = 3;
	let action = updateCurrentPage(currentPage);
	let newState = tasksReducer(state, action);
	expect(newState.currentPage).toBe(currentPage);
});