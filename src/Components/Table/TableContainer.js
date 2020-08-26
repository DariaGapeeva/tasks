import React from 'react';
import Table from './Table';
import axios from 'axios';

class TableContainer extends React.Component {
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(response =>

				console.log(response.data))

	}



	render() {
		return <Table />
	}
}

export default TableContainer;