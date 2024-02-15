import "./Expenses.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";


function Expenses(props) {

  const handleDelete = (itemId) => {
    //  props.arr.filter(ele => ele.id !== props.arr.id);
    const updatedItems = props.arr.filter((item) => item.id !== itemId);
  }

  return (
    <>
      <ul>
        {props.arr.map((ele, index) => (
          <li key={index}>
            <p><ExpenseDate date={ele.date}/></p>

            <ExpenseDetails  title={ele.title} amount={ele.amount}/>
            <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Expenses;
