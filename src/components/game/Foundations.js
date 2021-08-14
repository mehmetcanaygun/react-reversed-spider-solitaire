import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";

const Foundations = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { foundations } = solitaireContext;

  // Determine if the foundation slot will be filled or not
  const isFoundationFilled = (index) => {
    return index <= foundations ? "foundation-slot filled" : "foundation-slot";
  };

  return (
    <ul className="foundations">
      <li className={isFoundationFilled(8)}>
        <img
          src="/assets/foundation-card.svg"
          className="empty-card"
          alt="Empty Foundation"
        />
        <img
          src="/assets/foundation-card-filled.svg"
          className="filled-card"
          alt="Filled Foundation"
        />
      </li>
      <li className={isFoundationFilled(7)}>
        <img
          src="/assets/foundation-card.svg"
          className="empty-card"
          alt="Empty Foundation"
        />
        <img
          src="/assets/foundation-card-filled.svg"
          className="filled-card"
          alt="Filled Foundation"
        />
      </li>
      <li className={isFoundationFilled(6)}>
        <img
          src="/assets/foundation-card.svg"
          className="empty-card"
          alt="Empty Foundation"
        />
        <img
          src="/assets/foundation-card-filled.svg"
          className="filled-card"
          alt="Filled Foundation"
        />
      </li>
      <li className={isFoundationFilled(5)}>
        <img
          src="/assets/foundation-card.svg"
          className="empty-card"
          alt="Empty Foundation"
        />
        <img
          src="/assets/foundation-card-filled.svg"
          className="filled-card"
          alt="Filled Foundation"
        />
      </li>
      <li className={isFoundationFilled(4)}>
        <img
          src="/assets/foundation-card.svg"
          className="empty-card"
          alt="Empty Foundation"
        />
        <img
          src="/assets/foundation-card-filled.svg"
          className="filled-card"
          alt="Filled Foundation"
        />
      </li>
      <li className={isFoundationFilled(3)}>
        <img
          src="/assets/foundation-card.svg"
          className="empty-card"
          alt="Empty Foundation"
        />
        <img
          src="/assets/foundation-card-filled.svg"
          className="filled-card"
          alt="Filled Foundation"
        />
      </li>
      <li className={isFoundationFilled(2)}>
        <img
          src="/assets/foundation-card.svg"
          className="empty-card"
          alt="Empty Foundation"
        />
        <img
          src="/assets/foundation-card-filled.svg"
          className="filled-card"
          alt="Filled Foundation"
        />
      </li>
      <li className={isFoundationFilled(1)}>
        <img
          src="/assets/foundation-card.svg"
          className="empty-card"
          alt="Empty Foundation"
        />
        <img
          src="/assets/foundation-card-filled.svg"
          className="filled-card"
          alt="Filled Foundation"
        />
      </li>
    </ul>
  );
};

export default Foundations;
