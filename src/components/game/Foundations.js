import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";

const Foundations = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { foundations } = solitaireContext;

  // Format Slot Class - Takes slot index, checks if slot index is less than foundations state, returns proper className
  const getFoundationImgPath = (index) => {
    return index <= foundations
      ? "foundation-card-filled.svg"
      : "foundation-card.svg";
  };

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

{
  /* <ul className="foundations">
      <li className="foundation-slot">
        <img src={`/assets/${getFoundationImgPath(8)}`} alt="Foundation" />
      </li>
      <li className="foundation-slot">
        <img src={`/assets/${getFoundationImgPath(7)}`} alt="Foundation" />
      </li>
      <li className="foundation-slot">
        <img src={`/assets/${getFoundationImgPath(6)}`} alt="Foundation" />
      </li>
      <li className="foundation-slot">
        <img src={`/assets/${getFoundationImgPath(5)}`} alt="Foundation" />
      </li>
      <li className="foundation-slot">
        <img src={`/assets/${getFoundationImgPath(4)}`} alt="Foundation" />
      </li>
      <li className="foundation-slot">
        <img src={`/assets/${getFoundationImgPath(3)}`} alt="Foundation" />
      </li>
      <li className="foundation-slot">
        <img src={`/assets/${getFoundationImgPath(2)}`} alt="Foundation" />
      </li>
      <li className="foundation-slot">
        <img src={`/assets/${getFoundationImgPath(1)}`} alt="Foundation" />
      </li>
    </ul> */
}
