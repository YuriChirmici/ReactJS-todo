import {connect} from "react-redux";
import ColorSettings from "./ColorSettings";
import {setColors, setAngle} from "../../../redux/colors-reducer";

let mapStateToProps = (state) => {
	return {
		first: state.colors.first,
		second: state.colors.second,
		angle: state.colors.angle,
	}
}

let mapDispathToProps = {
	setColors,
	setAngle,
}

export default connect(mapStateToProps, mapDispathToProps)(ColorSettings)