import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";

const Foundations = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { foundations } = solitaireContext;

  // Format Slot Class - Takes slot index, checks if slot index is less than foundations state, returns proper className
  const formatSlotClass = (index) => {
    return index <= foundations ? "foundation-slot filled" : "foundation-slot";
  };

  return (
    <ul className="foundations">
      <li className={formatSlotClass(8)}></li>
      <li className={formatSlotClass(7)}></li>
      <li className={formatSlotClass(6)}></li>
      <li className={formatSlotClass(5)}></li>
      <li className={formatSlotClass(4)}></li>
      <li className={formatSlotClass(3)}></li>
      <li className={formatSlotClass(2)}></li>
      <li className={formatSlotClass(1)}></li>
    </ul>
  );
};

export default Foundations;
