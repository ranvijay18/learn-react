import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(){

    const [input, setInput] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput(values => ({...values, [name]: value}))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
       console.log(input);
    }

    return(
    <>
    <form className="expense-form" onSubmit={handleSubmit}>
        <label>Title: </label>
        <input type="text" name="title" onChange={handleChange} />
        <label>Amount: </label>
        <input type="number" name="amount" onChange={handleChange} />
        <label>Date: </label>
        <input type="date" name="date" onChange={handleChange} />
        <button type="submit">Add</button>
    </form>
    
    </>
    )
}

export default ExpenseForm;