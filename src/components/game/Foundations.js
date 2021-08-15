import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";

const Foundations = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { foundations } = solitaireContext;

  // Determine if the foundation slot will be filled or not
  const isFoundationFilled = (index) => {
    return index <= foundations ? "foundation-slot filled" : "foundation-slot";
  };

  const printFoundations = () => {
    let fndArr = [];

    for (let i = 8; i >= 1; i--) {
      fndArr.push(
        <li key={i} className={isFoundationFilled(i)}>
          <div className="foundation-front">
            <img src="/assets/foundation-spider.png" alt="Empty Foundation" />
          </div>
          <div className="foundation-back">
            <img
              src="/assets/foundation-spider-filled.png"
              alt="Filled Foundation"
            />
          </div>
        </li>
      );
    }

    return fndArr;
  };

  return <ul className="foundations">{printFoundations()}</ul>;
};

export default Foundations;
