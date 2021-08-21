import SolitaireState from "./context/SolitaireState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import ScoreBoard from "./components/game/ScoreBoard";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import "./css/App.css";

function App() {
  return (
    <SolitaireState>
      <Router>
        <div className="App">
          <header className="header">
            <Navbar />
            <ScoreBoard />
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </SolitaireState>
  );
}

export default App;
