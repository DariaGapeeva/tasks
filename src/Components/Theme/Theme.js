import React from 'react';
import styles from './Theme.module.css'




const Theme = (props) => {
	return <div className={props.value}>
		<button onClick={props.changeTheme} >Сменить тему</button>

	</div >
}

export default Theme;