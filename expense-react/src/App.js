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
      amount: "Rs 10"
    },
    {
      id: 2,
      date: new Date(),
      title: "Food",
      amount: "Rs 10"
    },
    {
      id: 3,
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
