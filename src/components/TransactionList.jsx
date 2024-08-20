import React from 'react'
import { GlobalContext } from '../Context/Globalstate'
import { useContext } from 'react'

function TransactionList() {
  const {transactions,deleteTransaction}=useContext(GlobalContext)

  
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction)=>(
           <li className={transaction.amount<0?"minus":"plus"} key={transaction.id}>
           {transaction.text} <span>{transaction.amount>0?'+':'-'}₹{Math.abs(transaction.amount)}</span><button className="delete-btn" 
           onClick={()=>deleteTransaction(transaction.id)}>x</button>
         </li>
        ))}
      </ul>
 
    </>
  )
}

export default TransactionList
