import React from "react";

export default function IndivisualExpense({ exp }) {
  const months = [
    { monthname: "january" },
    { monthname: "febuary" },
    { monthname: "march" },
    { monthname: "april" },
    { monthname: "may" },
    { monthname: "june" },
    { monthname: "july" },
    { monthname: "august" },
    { monthname: "september" },
    { monthname: "october" },
    { monthname: "november" },
    { monthname: "december" },
  ];
  return (
    <div className="indivisualexp">
      <div className="date">
        <div className="month">
          {months[parseInt(exp.date.slice(5, 7)) - 1].monthname}
        </div>
        <div className="year">{exp.date.slice(0, 4)}</div>
        <div className="day">{exp.date.slice(8, 10)}</div>
      </div>
      <div className="title">{exp.title}</div>
      <div className="amount">${exp.amount}</div>
    </div>
  );
}
