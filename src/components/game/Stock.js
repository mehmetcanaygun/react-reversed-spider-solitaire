import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";

const Stock = ({ stock }) => {
  const solitaireContext = useContext(SolitaireContext);
  const { addCards } = solitaireContext;

  return (
    <button
      className="stock"
      onClick={() => {
        if (stock.length > 0) addCards(stock[stock.length - 1]);
      }}
    >
      {stock.map((card, index) => (
        <div key={index} className={`stock-pile stock-pile-${index + 1}`}>
          {index + 1}
        </div>
      ))}
    </button>
  );
};

export default Stock;
