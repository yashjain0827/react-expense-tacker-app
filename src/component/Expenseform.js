import axios from "axios";
import React, { useState } from "react";
import { firebaseConfig } from "../Firebaseconfig";

export default function Expenseform({ setallexpense, allexpense, fetchdata }) {
  const [title, settitle] = useState("");
  const [amount, setamount] = useState("");
  const [date, setdate] = useState("");
  const [loading, setloading] = useState(false);

  const handleAddExpense = async () => {
    if (
      title.trim() &&
      amount.trim() &&
      date.trim() &&
      new Date(date) <= new Date() &&
      parseInt(amount) > 0
    ) {
      const newExpense = {
        title: title,
        amount: amount,
        date: date,
      };
      setloading(true);
      try {
        const response = await axios.post(
          `${firebaseConfig.databaseURL}/expenses.json`,
          newExpense
        );
        if (response.data) {
          fetchdata();
          // setloading(false);
        }
      } catch (error) {
        console.error("Error posting data:", error);
      }
      setloading(false);

      setamount("");
      settitle("");
      setdate("");
    } else if (new Date(date) > new Date()) {
      alert("You cant add a future expense");
    } else {
      alert("Enter a valid Expense");
    }
  };
  return (
    <div className="expense-form-container">
      <div className="hadding">
        <div>
          <span className="highlight">Yash's</span>{" "}
          <span className="nohighlight"> Expense Tracker</span>
        </div>
        <div className="line"></div>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="expense-form-outer">
        <div className="expense-form">
          <div>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setdate(e.target.value)}
            />
          </div>
        </div>
        {loading ? (
          <button onClick={handleAddExpense} className="add-expense" disabled>
            loading...
          </button>
        ) : (
          <button onClick={handleAddExpense} className="add-expense">
            Add expense
          </button>
        )}
      </form>
    </div>
  );
}
