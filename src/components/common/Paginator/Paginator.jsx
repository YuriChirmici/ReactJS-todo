import styles from "./Paginator.module.css";

const Paginator = (props) => {
	let pageNumber = Math.ceil(props.tasksCount / props.pageSize);
	let pages = [];
	for(let i = 1; i <= pageNumber; i++) {
		pages.push(
			<span
				key={i}
				onClick={ () => props.updateCurrentPage(i)}
				className={styles.pageLink + " " + (i === props.currentPage
					? styles.active :"")}
			>
				{i}
			</span>)
	}

	return (
		<div className={styles.paginator}>
			{pages}
		</div>
	)
};

export default Paginator;