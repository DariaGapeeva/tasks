import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './Counter/CounterContainer';
import ThemeContainer from './Components/Theme/ThemeContainer';

function App() {
	return (
		<div className="block">
			<CounterContainer />
			<ThemeContainer />
		</div>
	);
}

export default App;
