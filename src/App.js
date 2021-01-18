import React from "react";
import "./styles/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <main className="main-app">
          <Switch>
            <Route exact component={Home} path="/" />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
