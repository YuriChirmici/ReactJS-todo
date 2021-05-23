import styles from "./Content.module.css";
import TasksContainer from "./Tasks/TasksContainer";
import ColorSettingsContainer from "./ColorSettings/ColorSettingsContainer";

const Content = (props) => {
	let r1 = props.first.red;
	let r2 = props.second.red;

	let g1 = props.first.green;
	let g2 = props.second.green;

	let b1 = props.first.blue;
	let b2 = props.second.blue;

	let o1 = props.first.opacity;
	let o2 = props.second.opacity;

	let angle = props.angle;

	let style = {
		background: `linear-gradient(${angle}deg, 
		rgba(${r1},${g1},${b1},${o1}) 0%,
		rgba(${r2},${g2},${b2},${o2}) 50%)`
	}

	return (
		<div className={styles.container} style={style}>
			<div className={styles.wrapper}>
				<TasksContainer />
				<ColorSettingsContainer />
			</div>
		</div>
	);
}

export default Content;