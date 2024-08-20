import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/Globalstate';
import { useNavigate } from 'react-router-dom';


function Income() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount, // Ensure amount is a number
    };
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
    navigate('/');
  };

  return (
    <div className="income-container">
      <h3>Add Income</h3>
      <form onSubmit={onSubmitHandle}>
        <div className="form-control">
          <label htmlFor="text">Category</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
                backgroundColor: 'white',
                color: 'black',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '4px',
                outline: 'none',
              }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '4px',
                    outline: 'none',
                  }}
            
          />
        </div>
        <button className="btn2">Add Income</button>
      </form>
    </div>
  );
}

export default Income;
