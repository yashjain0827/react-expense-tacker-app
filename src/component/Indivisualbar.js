import React from "react";

export default function Indivisualbar({ month }) {
  return (
    <div className="indivisual-bar">
      <div className="full-height">
        <div
          className="fill-height"
          style={{
            height: `${month.per}%`,
            backgroundColor: "#2c0175",
            borderRadius: "0px",
            border: "none",
          }}
        ></div>
      </div>
      <p>{month.month}</p>
    </div>
  );
}
