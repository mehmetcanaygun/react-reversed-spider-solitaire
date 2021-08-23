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
        <div className="info">
          <p>
            If you're familiar with Spider Solitaire you can get a grip on MCA's
            Spider Solitaire in-a-flash!
          </p>
          <h2>Rules</h2>
          <ul>
            <li>
              🕷️ To move the cards, firstly click on a card or cards, then click
              on the destination card
            </li>
            <li>🕷️ Click on the bottom card of any pile to unselect cards</li>
            <li>🕷️ Sort the cards from "Ace" to "King"</li>
            <li>🕷️ You cannot click on the faced down cards</li>
            <li>
              🕷️ You cannot add cards from the stock if there's an empty pile
            </li>
            <li>🕷️ You will receive 125 points for each "A" to "K" run</li>
            <li>
              🕷️ Try to be the fastest MCA's Spider Solitaire player alive, and
              enjoy
            </li>
          </ul>
        </div>
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
        <div className="spider">
          <img
            src="/assets/spider-color-tertiary-no-stroke.png"
            alt="Loading"
          />
        </div>
      </div>
    </div>
  );
};

export default Start;
