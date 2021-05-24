import Tasks from "./Tasks";
import {connect} from "react-redux";
import {updateTaskText, addNewTask, deleteTask, updateTaskState, 
	updateCurrentPage} from "../../../redux/tasks-reducer";
import {getTasksSuper, getTasksCount, getTaskCounter, getCurrentText, getPageSize, 
	getCurrentPage, getNotCompletedTasksNumber} from "../../../redux/tasks-selectors";

let mapStateToProps = (state) => {
	return {
		tasks: getTasksSuper(state),
		tasksCount: getTasksCount(state),
		taskCounter: getTaskCounter(state),
		currentText: getCurrentText(state),
		pageSize: getPageSize(state),
		currentPage: getCurrentPage(state),
		notCompletedTasksNumber: getNotCompletedTasksNumber(state), 
	}
}

let mapDispatchToProps = {
	updateTaskText,
	addNewTask,
	deleteTask,
	updateTaskState,
	updateCurrentPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
