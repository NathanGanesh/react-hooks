/* eslint-disable react-hooks/rules-of-hooks */
// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react';

// function useLocalStorage(key, defaultValue) {
// 	const [ state, setState ] = React.useState(() => window.localStorage.getItem(key) || defaultValue);

// 	// 🐨 Here's where you'll use `React.useEffect`.
// 	// The callback should set the `state` in localStorage.
// 	// 💰 window.localStorage.setItem('state', state)
// 	React.useEffect(
// 		() => {
// 			window.localStorage.setItem(key, state);
// 		},
// 		[ key, state ]
// 	);

// 	return [ state, setState ];
// }

function useLocalStorage(key, defaultValue) {
	const [ state, setState ] = React.useState(() => JSON.parse(key) || defaultValue);

	React.useEffect(
		() => {
			window.localStorage.setItem(key, JSON.stringify(state));
		},
		[ key, state ]
	);

	return [ state, setState ];
}

function Greeting() {
	// 🐨 initialize the state to the value from localStorage
	// 💰 window.localStorage.getItem('name') || initialName

	const [ name, setName ] = useLocalStorage('name');

	function handleChange(event) {
		setName(event.target.value);
	}

	return (
		<div>
			<form>
				<label htmlFor="name">Name: </label>
				<input value={name} onChange={handleChange} id="name" />
			</form>
			{name ? <strong>Hello {name}</strong> : 'Please type your name'}
		</div>
	);
}

function App() {
	return <Greeting />;
}

export default App;
