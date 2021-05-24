import Content from "./Content";
import {connect} from "react-redux";
import {getFirst, getSecond, getAngle} from "../../redux/colors-selectors";

let mapStateToProps = (state) => {
	return {
		first: getFirst(state),
		second: getSecond(state),
		angle: getAngle(state),
	}
}

let mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
