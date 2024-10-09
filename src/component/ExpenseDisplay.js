import React, { useEffect, useState } from "react";
import ExpenseChart from "./ExpenseChart";
import AllExpense from "./AllExpense";

export default function ExpenseDisplay({
  filteredexp,
  handleyearchange,
  allexpense,
}) {
  const [allyears, setallyears] = useState([]);

  useEffect(() => {
    const totalyears = allexpense.map((exp) => exp.date.slice(0, 4));
    const filteredyear = totalyears.filter(
      (value, index) => totalyears.indexOf(value) === index
    );
    const sortedfilteryear = filteredyear.sort((a, b) => b - a);
    setallyears(sortedfilteryear);
  }, [allexpense]);
  if (allyears.length) {
    return (
      <div className="expense-display">
        <div className="filter-by-year">
          <h3>Filter By Year</h3>
          <select onChange={handleyearchange}>
            {allyears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <ExpenseChart filteredexp={filteredexp} />
        <AllExpense filteredexp={filteredexp} />
      </div>
    );
  } else {
    return <div className="expense-display">No Expense found</div>;
  }
}
