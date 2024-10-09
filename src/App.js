import axios from "axios";
import "./App.css";
import ExpenseDisplay from "./component/ExpenseDisplay";
import Expenseform from "./component/Expenseform";
import React, { useEffect, useState } from "react";
import { firebaseConfig } from "./Firebaseconfig";
function App() {
  const [allexpense, setallexpense] = useState([]);
  const [year, setyear] = useState("2024");
  const [filteredexp, setfilteredexp] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    if (allexpense) {
      const newfilteredexp = allexpense.filter(
        (exp) => exp.date.slice(0, 4) === year
      );
      setfilteredexp(newfilteredexp);
    }
  }, [allexpense, year]);

  const handleyearchange = (e) => {
    setyear(e.target.value);
  };
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `${firebaseConfig.databaseURL}/expenses.json`
      );
      if (response.data) {
        setallexpense(Object.values(response.data));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="body">
      <Expenseform
        setallexpense={setallexpense}
        allexpense={allexpense}
        fetchdata={fetchdata}
      />
      <ExpenseDisplay
        handleyearchange={handleyearchange}
        filteredexp={filteredexp}
        allexpense={allexpense}
      />
    </div>
  );
}

export default App;
