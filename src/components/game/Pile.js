import React from "react";
import Card from "./Card";

const Pile = ({ pile }) => {
  return (
    <div className="pile">
      {pile.map(({ pileId, card, faceUp }, index) => (
        <Card
          key={index}
          pileId={pileId}
          card={card}
          faceUp={faceUp}
          top={`${index * 20}px`}
          zIndex={index + 1}
        />
      ))}
    </div>
  );
};

export default Pile;
