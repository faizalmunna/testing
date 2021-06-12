import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import "./App.css";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/details/:postId" exact component={Details} />
        <Route path="/addpost" exact component={AddPost} />
      </Switch>
    </Router>
  );
}

export default App;
