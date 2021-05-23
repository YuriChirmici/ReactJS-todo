import styles from "./Tasks.module.css";
import Task from "./Task/Task";
import Paginator from "../../common/Paginator/Paginator";

const Tasks = (props) => {
	let tasks = props.tasks.map( task => {
		return (
			<Task 
				key={task.taskId}
				taskId={task.taskId}
				text={task.text}
				isChecked={task.isChecked}
				deleteTask={props.deleteTask}
				updateTaskState={props.updateTaskState}
				tasksCount={props.tasksCount}
				currentPage={props.currentPage}
				pageSize={props.pageSize}
				updateCurrentPage={props.updateCurrentPage}
			/>
		)
	})

	let onTaskChange = (e) => {
		props.updateTaskText(e.currentTarget.value);
	}

	let onTaskAdd = () => {
		if (props.currentText.trim().length !== 0){
			props.addNewTask();
			props.updateTaskText("");
			props.updateCurrentPage(Math.ceil((props.tasksCount + 1)/props.pageSize))
		}
	}
	
	return (
		<div className={styles.tasks}>
			<div className={styles.header}>
				<div>
					<h2>{props.tasksCount} Tasks </h2>
				</div>
				<div>
					<h2>{props.notCompletedTasksNumber} Remain</h2>
				</div>
			</div>
			<div className={styles.tasksList}>
				{tasks}
			</div>

			<Paginator 
				className={styles.paginator}
				updateCurrentPage={props.updateCurrentPage}
				pageSize={props.pageSize}
				currentPage={props.currentPage}
				tasksCount={props.tasksCount}
			/>

			<div className={styles.newTask}>
				<input 
					type="text" 
					value={props.currentText}
					onChange={onTaskChange}
					placeholder="New Task"
				/>
				<button onClick={onTaskAdd}>Add</button>
			</div>
		</div>
	)
}

export default Tasks;