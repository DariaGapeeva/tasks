import React from 'react';
import './App.css';
import CounterContainer from './Components/Counter/CounterContainer';
import ThemeContainer from './Components/Theme/ThemeContainer';
import TableContainer from './Components/Table/TableContainer';

function App() {
	return (<div >
		<div className="block">
			<CounterContainer />
			<ThemeContainer />


		</div>
		<div className="table">
			<TableContainer />
		</div>
	</div>
	);
}

export default App;
