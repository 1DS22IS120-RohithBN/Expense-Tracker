import React, { useContext } from 'react';
import { GlobalContext } from '../Context/Globalstate';

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  // Function to calculate total income
  const calculateIncome = () => {
    let sum = 0;
    transactions.forEach(transaction => {
      if (transaction.amount > 0) {
        sum += transaction.amount;
      }
    });
    console.log(sum); // Debugging purpose
    return sum;
  };

  // Function to calculate total expense
  const calculateExpense = () => {
    let sum = 0;
    transactions.forEach(transaction => {
      if (transaction.amount < 0) {
        sum += transaction.amount;
      }
    });
    return sum;
  };

  const income = calculateIncome();
  const expense = Math.abs(calculateExpense()); // To display the expense as a positive number

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">+₹{income.toFixed()}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">-₹{expense.toFixed()}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
