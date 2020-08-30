import React from 'react';
import Table from './Table';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUsersAC, deleteUserAC, updateUserDataAC, deleteUserThunkAC } from '../../redux/tableReduser';

class TableContainer extends React.Component {
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(response =>

				this.props.setUsers(response.data))
	}



	render() {
		return <Table users={this.props.users}
			deleteUser={this.props.deleteUser}
			buttonSaveDisabled={this.props.buttonSaveDisabled}
			inputDisabled={this.props.inputDisabled}
			buttonDeleteDisabled={this.props.buttonDeleteDisabled}
			inputDisabled={this.props.inputDisabled}
			updateUserData={this.props.updateUserData}
			buttonUpdateDisabled={this.props.buttonUpdateDisabled}
			deleteUserThunk={this.props.deleteUserThunk}
		/>
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.table.users,
		buttonSaveDisabled: state.table.buttonSaveDisabled,
		inputDisabled: state.table.inputDisabled,
		buttonDeleteDisabled: state.table.buttonDeleteDisabled,
		inputDisabled: state.table.inputDisabled,
		buttonUpdateDisabled: state.table.buttonUpdateDisabled
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users) => (dispatch(setUsersAC(users))),
		deleteUser: (userId) => (dispatch(deleteUserAC(userId))),
		updateUserData: (userId) => (dispatch(updateUserDataAC(userId))),
		deleteUserThunk: (userId) => (dispatch(deleteUserThunkAC(userId)))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);