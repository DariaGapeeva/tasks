import axios from "axios";

const SET_USERS = 'SET_USERS';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const ALL_BUTTONS_DISABLED = 'ALL_BUTTONS_DISABLED';

const initialState = {
	users: [],
	buttonSaveDisabled: true,
	buttonDeleteDisabled: false,
	buttonUpdateDisabled: false,
	inputDisabled: true,
}

const tableReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS: {
			return {
				...state,
				users: action.users
			}
		}
		case DELETE_USER: {

			return {
				...state,
				users: state.users.filter(user => user.id !== action.userId),
				buttonSaveDisabled: true,
				buttonDeleteDisabled: false,
				buttonUpdateDisabled: false,
				inputDisabled: true,
			}
		}
		case UPDATE_USER_DATA: {
			return {
				...state,
				buttonDeleteDisabled: true,
				buttonSaveDisabled: false,
				inputDisabled: false,
				buttonUpdateDisabled: true
			}
		}
		case ALL_BUTTONS_DISABLED: {
			return {
				...state,
				buttonSaveDisabled: true,
				buttonDeleteDisabled: true,
				buttonUpdateDisabled: true,
				inputDisabled: true,

			}
		}


		default: return state


	}
}


export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const deleteUserAC = (userId) => ({ type: DELETE_USER, userId });
export const updateUserDataAC = (userId) => ({ type: UPDATE_USER_DATA, userId });
export const allButtonsDisabledAC = () => ({ type: ALL_BUTTONS_DISABLED })

export const deleteUserThunkAC = (userId) => {
	return (dispatch) => {
		dispatch(allButtonsDisabledAC());
		axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then(response => {
				console.log(response.status)
				if (response.status === 200) {
					dispatch(deleteUserAC(userId))
				}
			})

	}
}

export default tableReducer;