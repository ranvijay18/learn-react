import { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import ExpenseFilter from './components/Expense/ExpenseFilter';
import ExpenseChart from './components/Expense/ExpenseChart';

function App() {
  const [expenses, setExpenses] = useState([]);

  const [demo , setDemo] = useState([]);
   
  const handleFormInput = (data) => {
      setExpenses([...expenses, data]);
  }
 
  const handleYear = (year) => {

   const demoExpense = expenses.filter(ele => {
    const date = new Date(ele.date)
    return date.getFullYear() === +year
   })
 
   setDemo(demoExpense);
  }



  return (
   <>
   <h1>Expenses Lists</h1>
   
   <ExpenseForm onFormSubmit={handleFormInput} />
   <ExpenseFilter yearValue = {handleYear}/>
   <ExpenseChart expensesArr={demo} />
   <Expenses arr = {expenses} />
   </>
  );
}

export default App;
