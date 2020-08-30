import React from 'react';
import styles from './Table.module.css'




const Table = (props) => {

	// let changeName = (event) => {
	// 	props.updateName(event.target.value)

	// }
	let changeUserName = (event) => {
		props.updateUserName(event.target.value)

	}
	let changePhone = (event) => {
		props.updatePhone(event.target.value)

	}


	return <div>

		<table className={styles.table}>
			<caption>Users</caption>
			<tr>
				<th>№</th>
				<th>Name</th>
				<th>Username</th>
				<th>Phone</th>
				<th>Address</th>

				<th>Website</th>
				<th></th>
			</tr>
			{props.users.map(user =>
				<tr key={user.id}>
					<td>{props.users.indexOf(user) + 1} </td>
					<td>{user.name} <input disabled={props.inputDisabled} value={props.name[user.id]} onChange={(event) => props.updateName(event.target.value, user.id)}></input></td>
					<td>{user.username} <input disabled={props.inputDisabled} value={props.username} onChange={changeUserName} ></input></td>
					<td>{user.phone}<input disabled={props.inputDisabled} value={props.phone} onChange={changePhone} ></input></td>
					<td>{`${user.address.city} , ${user.address.street}, ${user.address.suite}  `} </td>
					<td>{user.website} <input disabled={props.inputDisabled}></input></td>
					<td><button disabled={props.buttonDeleteDisabled} onClick={() => props.deleteUserThunk(user.id)}>Удалить</button><button disabled={props.buttonUpdateDisabled} onClick={() => props.updateUserData(user.id)}>Редактировать</button><button disabled={props.buttonSaveDisabled} onClick={() => { props.saveNameThunk(user.id, props.name[user.id]) }}>Сохранить</button></td></tr>)}

		</table>


	</div>
}

export default Table;