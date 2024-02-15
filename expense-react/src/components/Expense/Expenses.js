import "./Expenses.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";


function Expenses(props) {


  return (
    <>
      <ul>
        {props.arr.map((ele, index) => (
          <li key={index}>
            <p><ExpenseDate date={ele.date}/></p>

            <ExpenseDetails  title={ele.title} amount={ele.amount}/>
            
          </li>
        ))}
      </ul>
    </>
  );
}

export default Expenses;
