import React, { useContext, useState } from "react";
import SolitaireContext from "../../context/solitaireContext";

const Start = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { setStarted } = solitaireContext;

  const [startToggled, setStartToggled] = useState(false);

  return (
    <div className="start">
      <div className={startToggled ? "container started" : "container"}>
        <h1 className="title">
          Welcome to <span>MCA's Spider Solitaire</span>
        </h1>
        <p className="info">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          numquam optio quisquam aspernatur fuga illum doloremque laborum
          maiores, quia dolorem.
        </p>
        <button
          className="play-btn"
          onClick={() => {
            setStartToggled(true);

            setTimeout(() => {
              setStarted(true);
            }, 2000);
          }}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Start;
