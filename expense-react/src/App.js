import { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import ExpenseFilter from './components/Expense/ExpenseFilter';

function App() {
  const [expenses, setExpenses] = useState([]);
   
  const handleFormInput = (data) => {
      setExpenses([...expenses, data]);
  }
 
  const handleYear = (year) => {

  const demo =  expenses.filter(ele => {
    const date = new Date(ele.date)
    return date.getFullYear() === +year
   })
 
   console.log(demo);
  }



  return (
   <>
   <h1>Expenses Lists</h1>
   
   <ExpenseForm onFormSubmit={handleFormInput} />
   <ExpenseFilter yearValue = {handleYear}/>
   <Expenses arr = {expenses} />
   </>
  );
}

export default App;
