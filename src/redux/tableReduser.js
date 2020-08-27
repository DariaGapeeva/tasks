const SET_USERS = 'SET_USERS';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

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
				users: state.users.filter(user => user.id !== action.userId)
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

		default: return state


	}
}


export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const deleteUserAC = (userId) => ({ type: DELETE_USER, userId });
export const updateUserDataAC = (userId) => ({ type: UPDATE_USER_DATA, userId })

export default tableReducer;