import React from "react";
import Pile from "./Pile";

const Tableau = ({ tableau }) => {
  return (
    <div className="tableau">
      {tableau.map((pile, index) => (
        <Pile key={index} pile={pile} />
      ))}
    </div>
  );
};

export default Tableau;
