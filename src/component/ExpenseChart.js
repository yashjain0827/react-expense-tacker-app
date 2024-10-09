import React, { useEffect, useState } from "react";
import Indivisualbar from "./Indivisualbar";

export default function ExpenseChart({ filteredexp }) {
  const [allmonth, setallmonth] = useState([
    { monthnum: 1, month: "jan", value: 0, per: 0 },
    { monthnum: 2, month: "feb", value: 0, per: 0 },
    { monthnum: 3, month: "mar", value: 0, per: 0 },
    { monthnum: 4, month: "apr", value: 0, per: 0 },
    { monthnum: 5, month: "may", value: 0, per: 0 },
    { monthnum: 6, month: "jun", value: 0, per: 0 },
    { monthnum: 7, month: "jul", value: 0, per: 0 },
    { monthnum: 8, month: "aug", value: 0, per: 0 },
    { monthnum: 9, month: "sep", value: 0, per: 0 },
    { monthnum: 10, month: "ouc", value: 0, per: 0 },
    { monthnum: 11, month: "nov", value: 0, per: 0 },
    { monthnum: 12, month: "dec", value: 0, per: 0 },
  ]);

  useEffect(() => {
    const updatemonth = allmonth.map((month) => ({
      ...month,
      value: 0,
      per: 0,
    }));
    filteredexp.forEach((exp) => {
      const comthindex = parseInt(exp.date.slice(5, 7)) - 1;
      updatemonth.forEach((month, index) => {
        if (index === comthindex) {
          month.value += parseInt(exp.amount);
        }
      });
    });
    updatemonth.sort((a, b) => b.value - a.value);
    const max = updatemonth[0].value;
    updatemonth.forEach((month) => {
      if (max) {
        month.per = (month.value / max) * 100;
      }
    });
    updatemonth.sort((a, b) => a.monthnum - b.monthnum);
    setallmonth(updatemonth);
  }, [filteredexp]);
  return (
    <div className="expense-chart">
      {allmonth.map((month, index) => (
        <Indivisualbar month={month} key={index} />
      ))}
    </div>
  );
}
