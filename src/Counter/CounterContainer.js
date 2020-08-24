import { connect } from "react-redux";
import Counter from './Counter';
import { increment, decrement, async } from './../redux/counterReducer';


const mapStateToProps = (state) => {
	return {
		counter: state.counter.counter
	}
}






export default connect(mapStateToProps, { increment, decrement, async })(Counter)