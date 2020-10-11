import React from 'react';
import AddUser from './AddUser/AddUser';
import styles from './Table.module.css'
import User from './User/User';




const Table = (props) => {

	return <div>

		<table className={styles.table}>

			<caption>Users</caption>
			<thead>
				<tr>
					<th>№</th>
					<th>Name</th>
					<th>Username</th>
					<th>Phone</th>
					<th>Address</th>
					<th>Website</th>
					<th></th>
				</tr>
			</thead>
		</table>

		{props.users.map((user, index) => (
			<User key={user.id}
				index={index}
				user={user}
				inputDisabled={props.inputDisabled[index]}
				buttonDeleteDisabled={props.buttonDeleteDisabled[index]}
				buttonUpdateDisabled={props.buttonUpdateDisabled[index]}
				buttonSaveDisabled={props.buttonSaveDisabled[index]}
				deleteUserThunk={props.deleteUserThunk}
				updateUserData={props.updateUserData}
				saveNameThunk={props.saveNameThunk}
				updateButton={props.updateButton}

			/>)

		)}

		<AddUser
			index={props.users.length}
			buttonFillAddLine={props.buttonFillAddLine}
			onClickButtonFillAddLine={props.onClickButtonFillAddLine}
			inputFillAddLine={props.inputFillAddLine}
			buttonSaveAddLine={props.buttonSaveAddLine}
			addNewUser={props.addNewUser} />



	</div>
}

export default Table;