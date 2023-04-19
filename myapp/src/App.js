
import './App.css';
import React from 'react';
import { useState } from 'react';
import Jokes from './Components/Jokes';
import Stories from './Components/Stories';

function App(props) {
	const [oldState , NewState] = useState(0);
	const [query,setQuery] = useState('');

	function stateUpdater(){
		NewState(oldState + 1);
	}
	function queryUpdater(e){
		setQuery(e.target.value);
		//console.log(setQuery);
	}
	function searchQuery(){
		window.open(`https://www.google.com/search?q=${query}`, '_blank');
	}

	function enterHandler(e){
		if(e.key === 'Enter'){
			searchQuery();
		}
	}
  return (
	<div>
		<h1 onClick={stateUpdater}>Hello User Click me : {oldState} </h1>
		<h2> you clicked me : {oldState} times</h2>
		<div className='form'>
			<input value={query} onChange={queryUpdater} onKeyUp={enterHandler} style={{marginRight : 10}}/>
			<button onClick={searchQuery}>Search</button>
		</div>
		<div>
			<Jokes/>
		</div>
		<div>
			<Stories/>
		</div>
	</div>
  )
}

export default App
