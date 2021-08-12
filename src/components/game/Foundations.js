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

  return (
    <ul className="foundations">
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
    </ul>
  );
};

export default Foundations;
