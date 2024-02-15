import './App.css';
import Expenses from './components/Expense/Expenses';

function App() {

  const expenses = [
    {
      date: new Date(),
      title: "Food",
      amount: "Rs 10"
    },
    {
      date: new Date(),
      title: "Food",
      amount: "Rs 10"
    },
    {
      date: new Date(),
      title: "Food",
      amount: "Rs 10"
    },
    {
      date: new Date(),
      title: "Food",
      amount: "Rs 10"
    }
  ]
  return (
   <>
   <h1>Expenses Lists</h1>
   <Expenses arr={expenses}/>
   </>
  );
}

export default App;
