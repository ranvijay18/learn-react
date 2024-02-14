import './App.css';
import Expenses from './components/Expenses';

function App() {

  const expenses = [
    {
      date: "18 Feb 2023",
      title: "Food",
      amount: "Rs 10"
    },
    {
      date: "18 Feb 2023",
      title: "Food",
      amount: "Rs 10"
    },
    {
      date: "18 Feb 2023",
      title: "Food",
      amount: "Rs 10"
    },
    {
      date: "18 Feb 2023",
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
