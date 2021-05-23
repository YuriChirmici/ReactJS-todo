import styles from "./ColorSettings.module.css";
import close from "../../../img/close.png";
import menu from "../../../img/menu.png";
import {useState} from "react";

const ColorSettings = (props) => {
	let [settingsIsOpened, settingsIsOpenedChange] = useState(true);

	let onSetColors = (e) => {
		let nums = {1: "first", 2: "second"};
		let number = nums[e.currentTarget.name[0]];
		let name = e.currentTarget.name.substring(1);
		let value = e.currentTarget.value;
		props.setColors(number, name, value);
	}
	let colorsInList = (colors, index) => {
		let newColorsList = []
		let colorsMin = {red: "R", green: "G", blue: "B", opacity: "O"}
		let i = 0;
		for (let color in colors) {
			i++;
			newColorsList.push(
				<li key={i}>
					<span>{colorsMin[color]}</span>
					<input 
						type="range" 
						name={index + color}
						min="0" 
						max={colorsMin[color] !== "O" ? "255" : "1"}
						step={colorsMin[color] !== "O" ? "1" : "0.01"}
						value={colors[color]} 
						onChange={onSetColors}
					/> 
				</li>
			)
		}
		return newColorsList;
	}

	let firstColorList = colorsInList(props.first, 1);
	let secondColorList = colorsInList(props.second, 2);
	let angle = colorsInList(props.angle, "");

	let display = settingsIsOpened ? "box" : "none";
	let style = {display}
	
	return ( 
		<div className={styles.colorSettings} >
			{settingsIsOpened ? 
				<div className={styles.colorSettings__inner} style={style}>
					<div className={styles.close}>
						<button 
							className={styles.btnClose} 
							onClick={() => {settingsIsOpenedChange(false)}}
						>
							<img src={close} alt="close" />
						</button>
					</div>

					<h4>First color:</h4>
					<ul>{firstColorList}</ul>
					
					<h4>Second color:</h4>
					<ul>{secondColorList}</ul>

					<h4>Angle:</h4>
					<input 
						type="range" 
						name="angle"
						min="0" 
						max='359'
						step="1"
						value={props.angle} 
						onChange={(e) => props.setAngle(e.currentTarget.value)}
					/> 
				</div>
				:
				<div className={styles.open}>
					<button 
						className={styles.btnClose} 
						onClick={() => {settingsIsOpenedChange(true)}}
					>
						<img src={menu} alt="menu" />
					</button>
				</div> 
			}
		</div>
	)
} 

export default ColorSettings;