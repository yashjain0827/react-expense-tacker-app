import React from "react";
import IndivisualExpense from "./IndivisualExpense";

export default function AllExpense({ filteredexp }) {
  return (
    <div>
      {filteredexp.map((exp, index) => (
        <IndivisualExpense key={index} exp={exp} />
      ))}
    </div>
  );
}
