

function ExpenseDate(props){
  return(
    <>
    {props.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
    </>
  )
}

export default ExpenseDate;