import React from "react";
import Posts from "./Posts";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./Details";
const HomePage = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/details/:id" exact component={Details} />
      </Switch>
    </Router>
  );
};
export default HomePage;
