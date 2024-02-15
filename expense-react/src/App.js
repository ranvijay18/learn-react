import './App.css';
import Expenses from './components/Expense/Expenses';

function App() {

  const expenses = [
    {
      id: 0,
      date: new Date(),
      title: "Food",
      amount: "Rs 10"
    },
    {
      id: 1,
      date: new Date(),
      title: "Food",
      amount: "Rs 100"
    },
    {
      id: 2,
      date: new Date(),
      title: "Food",
      amount: "Rs 1000"
    },
    {
      id: 3,
      date: new Date(),
      title: "Food",
      amount: "Rs 10000"
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
