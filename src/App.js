import SolitaireState from "./context/SolitaireState";

import "./css/App.css";

function App() {
  return (
    <SolitaireState>
      <div className="App">
        <h1>Can</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quis
          consectetur voluptatum unde, rem minus distinctio omnis eligendi? At,
          quis?
        </p>
      </div>
    </SolitaireState>
  );
}

export default App;
