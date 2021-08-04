import React from "react";

const Stock = ({ stock }) => {
  return (
    <button className="stock">
      {stock.map((card, index) => (
        <div key={index} className={`stock-pile stock-pile-${index + 1}`}>
          {index + 1}
        </div>
      ))}
    </button>
  );
};

export default Stock;
