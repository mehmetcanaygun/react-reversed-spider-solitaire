import React from "react";
import Pile from "./Pile";
import PropTypes from "prop-types";

const Tableau = ({ tableau }) => {
  return (
    <div className="tableau">
      <Pile key="0" pile={tableau?.pile0} pileIndex={0} />
      <Pile key="1" pile={tableau?.pile1} pileIndex={1} />
      <Pile key="2" pile={tableau?.pile2} pileIndex={2} />
      <Pile key="3" pile={tableau?.pile3} pileIndex={3} />
      <Pile key="4" pile={tableau?.pile4} pileIndex={4} />
      <Pile key="5" pile={tableau?.pile5} pileIndex={5} />
      <Pile key="6" pile={tableau?.pile6} pileIndex={6} />
      <Pile key="7" pile={tableau?.pile7} pileIndex={7} />
      <Pile key="8" pile={tableau?.pile8} pileIndex={8} />
      <Pile key="9" pile={tableau?.pile9} pileIndex={9} />
    </div>
  );
};

Tableau.propTypes = {
  tableau: PropTypes.object.isRequired,
};

export default Tableau;
