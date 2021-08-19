import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";
import { isPileEmpty } from "../../utils/helpers";
import PropTypes from "prop-types";

const Stock = ({ stock }) => {
  const solitaireContext = useContext(SolitaireContext);
  const { addCards, tableau, setAlert } = solitaireContext;

  const handleAddingCards = () => {
    // Make sure stock has cards to add
    if (stock.length > 0) {
      // Check if there's an empty pile
      if (!isPileEmpty(tableau)) {
        addCards(stock[stock.length - 1]);
      } else {
        setAlert(
          "warning",
          "All piles should have at least one card before adding cards"
        );
      }
    }
  };

  return (
    <button data-testid="stock" className="stock" onClick={handleAddingCards}>
      {stock.map((card, index) => (
        <div key={index} className={`stock-pile stock-pile-${index + 1}`}>
          <img src="/assets/spider-color-primary.png" alt="Card Back" />
        </div>
      ))}
    </button>
  );
};

Stock.propTypes = {
  stock: PropTypes.array.isRequired,
};

export default Stock;
