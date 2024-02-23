import "./ExpenseDate.css";


function ExpenseDate(props){

  const dateObj = new Date(props.date);

  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("en-US", { month: "long" });
  const year = dateObj.getFullYear();

  return(
    <div className="date">
    <p className="month">{month}</p>
    <p className="year">{year}</p>
    <p className="day">{day}</p>
    </div>
  )
}

export default ExpenseDate;