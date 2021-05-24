import {createSelector} from "reselect";

export const getTasksCount = (state) => state.tasksPage.tasks.length;
export const getTaskCounter = (state) => state.tasksPage.taskCounter;
export const getCurrentText = (state) => state.tasksPage.currentText;
export const getPageSize = (state) => state.tasksPage.pageSize;
export const getCurrentPage = (state) => state.tasksPage.currentPage;
export const getTasks = (state) => state.tasksPage.tasks; 

export const getNotCompletedTasksNumber = createSelector(getTasks, (tasks) => {
	return tasks.filter( task => !task.isChecked).length;
})

export const getTasksSuper = createSelector(getTasks, getCurrentPage, getPageSize,
	(tasks, currentPage, pageSize) => {
		let min = (currentPage - 1) * pageSize;
		let max = currentPage * pageSize;
		return tasks.slice(min, max);
})