import React from 'react';
import styles from './Table.module.css'




const Table = (props) => {


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
					<td>{user.id} </td>
					<td>{user.name} <input disabled={props.inputDisabled} ></input></td>
					<td>{user.username} <input disabled={props.inputDisabled}></input></td>
					<td>{user.phone}<input disabled={props.inputDisabled}></input></td>
					<td>{`${user.address.city} , ${user.address.street}, ${user.address.suite}  `} </td>
					<td>{user.website} <input disabled={props.inputDisabled}></input></td>
					<td><button disabled={props.buttonDeleteDisabled} onClick={() => props.deleteUser(user.id)}>Удалить</button><button disabled={props.buttonUpdateDisabled} onClick={() => props.updateUserData(user.id)}>Редактировать</button><button disabled={props.buttonSaveDisabled}>Сохранить</button></td></tr>)}

		</table>


	</div>
}

export default Table;