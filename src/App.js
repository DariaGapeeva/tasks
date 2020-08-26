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
		<TableContainer />
	</div>
	);
}

export default App;
