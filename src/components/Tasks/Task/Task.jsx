import styles from "./Task.module.css"

const Task = (props) => {
	let onTaskDelete = () => {
		//if current page is last and we are deleting the last element in this page, 
		//go to the previous page (if current page is not a first)
		if(props.currentPage === ((props.tasksCount-1)/props.pageSize + 1)
			&& props.currentPage !== 1) {
			props.updateCurrentPage(props.currentPage - 1);
		}
		props.deleteTask(props.taskId);
	}

	let onCheckboxChange = (e) => {
		props.updateTaskState(e.currentTarget.checked, props.taskId);
	}

	return (
		<div className={styles.task}>
			<div className={styles.checkbox}>
				<input 
					type="checkbox"
					id={styles.taskText}
					onChange={onCheckboxChange}
					checked={props.isChecked}
				/>
				<label htmlFor={styles.taskText}>
					{props.text}
				</label>
			</div>
			
			<button 
				className={styles.button}
				onClick={ onTaskDelete}
			> 
				Delete 
			</button>
		</div>	
	)
}

export default Task;