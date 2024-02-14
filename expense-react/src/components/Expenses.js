import "./Expenses.css";

function Expenses(props) {
  // const date = new Date();
  // const expenseTitle = "Food";
  // const expenseAmount = "Rs 10";
  return (
    <>
      <ul>
        {props.arr.map((ele, index) => (
          <li key={index}>
            <p>{ele.date}</p>

            <h1>{ele.title}</h1>

            <p> {ele.amount}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Expenses;
