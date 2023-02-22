import React from 'react'
import  './ExpenseItem.css'

function ExpenseItem(props) {
    // const expenseDate = new Date(2023,2,28);
    // const expenseTitle = 'car Insurance';
    // const expenseAmount = 2000;
  
  return (
    <div className='expense-item'> 
        <div className='expense-date'>{props.date}</div>
        <div className='.expense-item_description'><h2>{props.title}</h2></div>
        <div className='expense-item_price'> Rs{props.amount}</div>
    </div>

  )
}

export default ExpenseItem