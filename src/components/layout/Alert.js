import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";

const Alert = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { alert } = solitaireContext;

  if (!alert) return null;

  return (
    <div className={alert ? `alert ${alert.type}` : "alert"}>
      <div className="alert-top">
        <span className="icon">
          <img src="/assets/icon-info.svg" alt="Info" />
        </span>
        <span className="msg">{alert?.msg}</span>
      </div>
      <div className="alert-bottom">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

export default Alert;
