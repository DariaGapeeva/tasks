import { connect } from "react-redux";
import { changeTheme } from './../../redux/themeReduser';
import Theme from './Theme'

const mapStateToProps = (state) => {
	return {
		value: state.theme.value,
		disabled: state.theme.disabled
	}
}




export default connect(mapStateToProps, { changeTheme })(Theme);