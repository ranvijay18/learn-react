import { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import ExpenseForm from './components/NewExpense/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);
   
  const handleFormInput = (data) => {
      setExpenses([...expenses, data]);
  }


  return (
   <>
   <h1>Expenses Lists</h1>
   <ExpenseForm onFormSubmit={handleFormInput} />
   <Expenses arr={expenses} />
   </>
  );
}

export default App;
