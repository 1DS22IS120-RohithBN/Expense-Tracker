import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import Income from './pages/Income';
import Expense from './pages/Expense';
import { GlobalProvider } from './Context/Globalstate';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <div className="container">   
         <Routes>
            <Route
              path="/"
              element={
                <>
                  <Balance />
                  <IncomeExpense />
                  <TransactionList />
                  <Link to='/income'>
            <button className='btn2'>+ Income</button></Link>
            <Link to='/expense'>
            <button className='btn3' >- Expense</button></Link>
                </>
              }
            />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
