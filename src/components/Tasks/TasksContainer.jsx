import Tasks from "./Tasks";
import {connect} from "react-redux";
import {updateTaskText, addNewTask, deleteTask, updateTaskState, 
	updateCurrentPage} from "../../redux/tasks-reducer";


let mapStateToProps = (state) => {
	let min = (state.tasksPage.currentPage - 1) * state.tasksPage.pageSize;
	let max = state.tasksPage.currentPage * state.tasksPage.pageSize;
	let tasks = state.tasksPage.tasks.slice(min, max);
	let notCompletedTasksNumber = state.tasksPage.tasks.filter( task => 
		!task.isChecked).length;
	return {
		tasks: tasks,
		tasksCount: state.tasksPage.tasks.length,
		taskCounter: state.tasksPage.taskCounter,
		currentText: state.tasksPage.currentText,
		pageSize: state.tasksPage.pageSize,
		currentPage: state.tasksPage.currentPage,
		notCompletedTasksNumber: notCompletedTasksNumber, 
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateTaskText(currentText) {
			dispatch(updateTaskText(currentText));
		},
		addNewTask() {
			dispatch(addNewTask());
		},
		deleteTask(taskId){
			dispatch(deleteTask(taskId));
		},
		updateTaskState(isChecked, taskId){
			dispatch(updateTaskState(isChecked, taskId));
		},
		updateCurrentPage(pageNumber) {
			dispatch(updateCurrentPage(pageNumber));
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
