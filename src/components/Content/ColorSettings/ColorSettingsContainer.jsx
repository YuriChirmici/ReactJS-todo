import {connect} from "react-redux";
import ColorSettings from "./ColorSettings";
import {setColors, setAngle} from "../../../redux/colors-reducer";
import {getFirst, getSecond, getAngle} from "../../../redux/colors-selectors";

let mapStateToProps = (state) => {
	return {
		first: getFirst(state),
		second: getSecond(state),
		angle: getAngle(state),
	}
}

let mapDispathToProps = {
	setColors,
	setAngle,
}

export default connect(mapStateToProps, mapDispathToProps)(ColorSettings)