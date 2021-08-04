import React from "react";
import Card from "./Card";

const Pile = ({ pile }) => {
  return (
    <div className="pile">
      {pile.map((card, index) => (
        <Card
          key={index}
          card={card}
          faceUp={index === pile.length - 1 ? true : false}
          top={`${index * 30}px`}
          zIndex={index + 1}
        />
      ))}
    </div>
  );
};

export default Pile;
