import Content from "./Content";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
	return {
		first: state.colors.first,
		second: state.colors.second,
		angle: state.colors.angle,
	}
}

let mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
