import "./Expenses.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";


function Expenses(props) {

  return (
    <Card>
      <ul>
        {props.arr.map((ele, index) => (
          <li key={index}>
            <p><ExpenseDate date={ele.date}/></p>

            <ExpenseDetails  title={ele.title} amount={ele.amount}/>
            
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Expenses;
