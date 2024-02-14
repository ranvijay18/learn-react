function Expenses(){


    const date = new Date();
    const expenseTitle = "Food";
    const expenseAmount = "Rs 10";
    return(
        <>
        <div>
            {date.toISOString()}
        </div>
        <div>
            <h1>{expenseTitle}</h1>
        </div>
        <div>
           {expenseAmount}
        </div>

        <div>
            18 Feb 2023
        </div>
        <div>
            <h1>Petrol</h1>
        </div>
        <div>
            Rs. 100
        </div>

        <div>
            18 Feb 2023
        </div>
        <div>
            <h1>Movie</h1>
        </div>
        <div>
            Rs. 200
        </div>
        </>
        //
    )
}

export default Expenses;