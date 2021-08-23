import React, { useContext, useEffect } from "react";
import SolitaireContext from "../../context/solitaireContext";
import { playSound } from "../../utils/helpers";
import alertSound from "../../assets/alert.mp3";

const Alert = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { alert } = solitaireContext;

  useEffect(() => {
    if (alert) playSound(alertSound);

    // eslint-disable-next-line
  }, [alert]);

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
