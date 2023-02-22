
import './App.css';
import ExpenseItem from './Components/ExpenseItem';

import React from 'react'

function App(props) {
	const expenses = [{ id : 1, title : 'LPG', amount : 1150, date : 'Feb 23 2023'},
	{ id : 2, title : 'Milk', amount : 1000, date : 'Feb 24 2023'},
	{ id : 3, title : 'Hospital expenses', amount : 1500, date :'Feb 25 2023'}];
  return (
	<div>
		<ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
		<ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
		<ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>

	</div>
  )
}

export default App
