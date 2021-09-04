import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./news";
import "./style/style.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <News />
      </Route>
      <Route path="/category/:id">
        <News />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
