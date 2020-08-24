const CHANGE_THEME = 'CHANGE_THEME';
const DISABLE_BUTTONS = 'DISABLE_BUTTONS';
const ENABLE_BUTTONS = 'ENABLE_BUTTONS';

const initialState = {
	value: 'light',
	disabled: false
}

const themeReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_THEME: {
			if (state.value === 'dark') {
				return {
					...state,
					value: 'light'
				}
			} else {
				return {
					...state,
					value: 'dark'
				}
			}

		}
		case DISABLE_BUTTONS: {
			return {
				...state,
				disabled: true
			}
		}
		case ENABLE_BUTTONS: {
			return {
				...state,
				disabled: false
			}
		}
		default: return state
	}
}


export default themeReducer;

export const changeTheme = (value) => ({ type: CHANGE_THEME, value: value });
export const disableButtons = () => ({ type: DISABLE_BUTTONS });
export const enableButtons = () => ({ type: ENABLE_BUTTONS });