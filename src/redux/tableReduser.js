import { usersApi } from "../API/api";

const SET_USERS = 'SET_USERS';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const ALL_BUTTONS_DISABLED = 'ALL_BUTTONS_DISABLED';
const UPDATE_BUTTON = 'UPDATE_BUTTON';
const ON_CLICK_BUTTON_FILL_ADD_LINE = 'ON_CLICK_BUTTON_FILL_ADD_LINE';
const ADD_NEW_USER = 'ADD_NEW_USER';


const initialState = {
	users: [],
	buttonSaveDisabled: [true, true, true, true, true, true, true, true, true, true, true],
	buttonDeleteDisabled: [false, false, false, false, false, false, false, false, false, false],
	buttonUpdateDisabled: [false, false, false, false, false, false, false, false, false, false],
	inputDisabled: [true, true, true, true, true, true, true, true, true, true, true],
	buttonFillAddLine: false,
	inputFillAddLine: true,
	buttonSaveAddLine: true

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
				buttonSaveDisabled: state.buttonSaveDisabled.filter((item, index) => index !== action.index),
				buttonDeleteDisabled: state.buttonDeleteDisabled.filter((item, index) => index !== action.index),
				buttonUpdateDisabled: state.buttonUpdateDisabled.filter((item, index) => index !== action.index),
				inputDisabled: state.inputDisabled.filter((item, index) => index !== action.index),
			}
		}
		case UPDATE_USER_DATA: {
			return {
				...state,
				users: state.users.map(user => user.id === action.userId
					? {
						...user,
						name: action.name || user.name,
						username: action.username || user.username,
						phone: action.phone || user.phone,
						website: action.website || user.website
					}
					: user),
				buttonDeleteDisabled: state.buttonDeleteDisabled.map((item, index) => index === action.index ? false : item),
				buttonSaveDisabled: state.buttonSaveDisabled.map((item, index) => index === action.index ? true : item),
				inputDisabled: state.inputDisabled.map((item, index) => index === action.index ? true : item),
				buttonUpdateDisabled: state.buttonUpdateDisabled.map((item, index) => index === action.index ? false : item),
			}
		}
		case UPDATE_BUTTON: {
			return {
				...state,
				buttonDeleteDisabled: state.buttonDeleteDisabled.map((item, index) => index === action.index ? true : item),
				buttonSaveDisabled: state.buttonSaveDisabled.map((item, index) => index === action.index ? false : item),
				inputDisabled: state.inputDisabled.map((item, index) => index === action.index ? false : item),
				buttonUpdateDisabled: state.buttonUpdateDisabled.map((item, index) => index === action.index ? true : item),

			}
		}

		case ALL_BUTTONS_DISABLED: {
			return {
				...state,
				buttonDeleteDisabled: state.buttonDeleteDisabled.map((item, index) => index === action.index ? true : item),
				buttonSaveDisabled: state.buttonSaveDisabled.map((item, index) => index === action.index ? true : item),
				inputDisabled: state.inputDisabled.map((item, index) => index === action.index ? true : item),
				buttonUpdateDisabled: state.buttonUpdateDisabled.map((item, index) => index === action.index ? true : item),

			}
		}

		case ON_CLICK_BUTTON_FILL_ADD_LINE: {
			return {
				...state,
				inputFillAddLine: false,
				buttonSaveAddLine: false,
				buttonFillAddLine: true


			}
		}

		case ADD_NEW_USER: {
			let newUser = {
				id: state.users.length + 1,
				name: action.name,
				username: action.username,
				phone: action.phone,
				address: action.address,
				website: action.website,


			}
			return {
				...state,
				users: [...state.users, newUser],
				buttonSaveDisabled: [...state.buttonSaveDisabled, true],
				buttonDeleteDisabled: [...state.buttonDeleteDisabled, false],
				buttonUpdateDisabled: [...state.buttonUpdateDisabled, false],
				inputDisabled: [...state.inputDisabled, true],
				buttonFillAddLine: false,
				inputFillAddLine: true,
				buttonSaveAddLine: true

			}
		}

		default: return state


	}
}


export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const deleteUserAC = (userId, index) => ({ type: DELETE_USER, userId, index });
export const updateUserDataAC = (userId, index, name, username, phone, website) => ({ type: UPDATE_USER_DATA, userId, index, name, username, phone, website });
export const updateButtonAC = (index) => ({ type: UPDATE_BUTTON, index });
export const allButtonsDisabledAC = (index) => ({ type: ALL_BUTTONS_DISABLED, index });
export const onClickButtonFillAddLineAC = () => ({ type: ON_CLICK_BUTTON_FILL_ADD_LINE });
export const addNewUserAC = (name, username, phone, address, website) => ({ type: ADD_NEW_USER, name, username, phone, address, website });


export const saveUserDataThunkAC = () => {
	return (dispatch) => {
		dispatch(allButtonsDisabledAC());

	}
}

export const getUsersDataThunkAC = () => async (dispatch) => {
	let response = await usersApi.getUsersData();
	dispatch(setUsersAC(response.data));
}

export const deleteUserThunkAC = (userId, index) => async (dispatch) => {
	dispatch(allButtonsDisabledAC(index));
	let response = await usersApi.deleteUser(userId);
	if (response.status === 200) {
		dispatch(deleteUserAC(userId, index))
	}
}




export default tableReducer;