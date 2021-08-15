import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";
import { isPileEmpty } from "../../utils/helpers";
import PropTypes from "prop-types";

const Stock = ({ stock }) => {
  const solitaireContext = useContext(SolitaireContext);
  const { addCards, tableau } = solitaireContext;

  const handleAddingCards = () => {
    // Make sure stock has cards to add
    if (stock.length > 0) {
      // Check if there's an empty pile
      if (!isPileEmpty(tableau)) {
        addCards(stock[stock.length - 1]);
      } else {
        console.log("There's an empty pile");
      }
    }
  };

  return (
    <button className="stock" onClick={handleAddingCards}>
      {stock.map((card, index) => (
        <div key={index} className={`stock-pile stock-pile-${index + 1}`}>
          <img src="/assets/card-back-spider.png" alt="Card Back" />
        </div>
      ))}
    </button>
  );
};

Stock.propTypes = {
  stock: PropTypes.array.isRequired,
};

export default Stock;
