import axios from "axios";

const SET_USERS = 'SET_USERS';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const ALL_BUTTONS_DISABLED = 'ALL_BUTTONS_DISABLED';
const UPDATE_NAME = 'UPDATE_USER_NAME';
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PHONE = 'UPDATE_PHONE';
const INITIAL = 'INITIAL';
const SET_ONE_USER = 'SET_ONE_USER';


const initialState = {
	users: [],
	buttonSaveDisabled: true,
	buttonDeleteDisabled: false,
	buttonUpdateDisabled: false,
	inputDisabled: true,
	username: '',
	phone: '',
	currentUser: -1,
	name: ''
}

const tableReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS: {
			return {
				...state,
				users: action.users,
				name: action.users.map(item => '')

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
				buttonUpdateDisabled: true,

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
		case UPDATE_NAME: {
			return {
				...state,
				name: action.name,
				currentUser: action.userId
			}
		}

		case UPDATE_USERNAME: {
			return {
				...state,
				username: action.username,
				currentUser: action.userId
			}
		}
		case UPDATE_PHONE: {
			return {
				...state,
				phone: action.phone
			}
		}
		case INITIAL: {
			return {
				...state,
				buttonSaveDisabled: true,
				buttonDeleteDisabled: false,
				buttonUpdateDisabled: false,
				inputDisabled: true,

				name: '',
				username: '',

				currentUser: -1

			}
		}
		case SET_ONE_USER: {
			return {
				...state,
				users: state.users.map(user => action.userId === user.id ? action.user : user),
				buttonSaveDisabled: true,
				buttonDeleteDisabled: false,
				buttonUpdateDisabled: false,
				inputDisabled: true,

			}

		}
		default: return state


	}
}


export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const deleteUserAC = (userId) => ({ type: DELETE_USER, userId });
export const updateUserDataAC = (userId) => ({ type: UPDATE_USER_DATA, userId });
export const allButtonsDisabledAC = () => ({ type: ALL_BUTTONS_DISABLED });
export const updateNameAC = (name, userId) => ({ type: UPDATE_NAME, name, userId });
export const updateUserNameAC = (username, userId) => ({ type: UPDATE_USERNAME, username, userId });
export const updatePhoneAC = (phone) => ({ type: UPDATE_USERNAME, phone });
export const initialAC = () => ({ type: INITIAL })

export const setOneUser = (user, userId) => ({ type: SET_ONE_USER, user, userId })

export const deleteUserThunkAC = (userId) => {
	return (dispatch) => {
		dispatch(allButtonsDisabledAC());
		axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then(response => {

				if (response.status === 200) {
					dispatch(deleteUserAC(userId))
				}
			})

	}
}

export const saveUserDataThunkAC = () => {
	return (dispatch) => {
		dispatch(allButtonsDisabledAC());

	}
}
export const saveNameThunkAC = (userId, name, username) => {
	return (dispatch) => {
		dispatch(allButtonsDisabledAC());
		axios({
			url: `https://jsonplaceholder.typicode.com/users/${userId}`,
			method: 'patch',
			data: ({
				name: `${name}`,
				username: `${username}`,
				phone: "123456789"
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
			console.log(response.data);
			dispatch(setOneUser(response.data, userId));
			dispatch(initialAC());

		})
	}
}

export default tableReducer;