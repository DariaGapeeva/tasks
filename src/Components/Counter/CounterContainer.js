import { connect } from "react-redux";
import Counter from './Counter';
import { increment, decrement, async } from './../../redux/counterReducer';
import { disableButtons, enableButtons } from './../../redux/themeReduser'


const mapStateToProps = (state) => {
	return {
		counter: state.counter.counter,
		disabled: state.theme.disabled
	}
}






export default connect(mapStateToProps, { increment, decrement, async, disableButtons, enableButtons })(Counter)