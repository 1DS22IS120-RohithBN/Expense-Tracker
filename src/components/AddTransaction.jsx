import React, { useState } from 'react';
import { GlobalContext } from '../Context/Globalstate';
import { useContext } from 'react';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onsubmitHandle = (e) => {
    e.preventDefault();
    const newTransaction = { id: Date.now(), text, amount: +amount };
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onsubmitHandle}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
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
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
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
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
