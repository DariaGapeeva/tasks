const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ASYNC = 'ASYNC';

let initialState = {
	counter: 0
}


const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT: {
			return {
				...state,
				counter: state.counter + 1
			}
		}
		case DECREMENT: {
			return {
				...state,
				counter: state.counter - 1
			}
		}
		case ASYNC: {
			return {
				...state,
				counter: state.counter - 2
			}
		}


		default:
			return state;
	}
}


export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const async = () => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch({ type: ASYNC })
		}, 2000);
	}
}
export default counterReducer;