import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import './App.css'
import { GlobalProvider } from './Context/Globalstate'

function App() {
 

  return (
    <GlobalProvider>
    <Header />
    <div className="container">
      <Balance />
    </div>
    <IncomeExpense/>
    <TransactionList />
    <AddTransaction />
    </GlobalProvider>
  )
}

export default App
