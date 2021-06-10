import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/details/:postId" exact component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
