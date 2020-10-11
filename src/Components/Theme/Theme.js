import React from 'react';





const Theme = (props) => {
	return <div className={props.value}>
		<button disabled={props.disabled} onClick={props.changeTheme} >Сменить тему</button>

	</div >
}

export default Theme;