import { useState } from "react";

function ExpenseDetails(props){

  
  const [amount , setAmount] = useState(props.amount)

  const handleChange = () => {
         setAmount("$ 100");
  }

  return (
    <>
    <h1>{props.title}</h1>

     <p> {amount}</p>

     <button className="delete" onClick={handleChange}>Change Amount</button>
    </>
  )
}


export default ExpenseDetails;