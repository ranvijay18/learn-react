

function ExpenseFilter(props) {
  const years = [];
  for (let year = 2000; year <= 2024; year++) {
    years.push(year);
  }

  const handleChange = (event) => {
    event.preventDefault();
    props.yearValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="year">Select Year:</label>
      <select id="year" onChange={handleChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ExpenseFilter;