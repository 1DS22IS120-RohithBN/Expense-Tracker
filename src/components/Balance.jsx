import React from 'react'
import { GlobalContext } from '../Context/Globalstate'
import { useContext } from 'react'


function Balance() {
  const {transactions}=useContext(GlobalContext);
  const amounts=transactions.map(transaction=>transaction.amount)
  console.log(amounts);
  const total=amounts.reduce((acc,cur)=>(acc+=cur),0).toFixed()


  return (
    <div>
      <h4>Balance:</h4>
      <h1>₹{total}</h1>
    </div>
  )
}

export default Balance
