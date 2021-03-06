import React, { useContext, useEffect } from "react";
import SolitaireContext from "../../context/solitaireContext";
import { playSound } from "../../utils/helpers";
import runSound from "../../assets/run.mp3";

const Foundations = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { foundations, setEnded } = solitaireContext;

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
            <img
              src="/assets/spider-color-light-no-stroke.png"
              alt="Empty Foundation"
            />
          </div>
          <div className="foundation-back">
            <img
              src="/assets/spider-color-tertiary-no-stroke.png"
              alt="Filled Foundation"
            />
          </div>
        </li>
      );
    }

    return fndArr;
  };

  useEffect(() => {
    if (foundations === 8) setEnded();

    if (foundations !== 0) {
      playSound(runSound);
    }

    // eslint-disable-next-line
  }, [foundations]);

  return <ul className="foundations">{printFoundations()}</ul>;
};

export default Foundations;
