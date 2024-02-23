import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props){

    const [input, setInput] = useState({});
    const [view, setView] = useState(1);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput(values => ({...values, [name]: value}))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
       props.onFormSubmit(input);
       
    }
    const handleFormHide = () => {
        setView(1);
    }
    const handleFormView = () => {
        setView(2);
    }

    return(
    <>

   {(view === 1) ? (
    <div className="expense-form">
      <button onClick={handleFormView}>Add Expenses</button>
    </div>    
   ) : (
        <form className="expense-form">
        <label>Title: </label>
        <input type="text" name="title" onChange={handleChange} />
        <label>Amount: </label>
        <input type="number" name="amount" onChange={handleChange} />
        <label>Date: </label>
        <input type="date" name="date" onChange={handleChange} />
        <button onClick={handleFormHide}>Cancel</button>
        <button onClick={handleSubmit}>Add Expenses</button>
    </form>
   )}
    </>
    )
}

export default ExpenseForm;