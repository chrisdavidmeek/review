import React from "react";
import "./App.css";
import List from "./components/List";
import Item from "./components/Item";
import ItemPage from "./components/ItemPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to={"/List"}>List</Link>
            </li>
            <li>
              <Link to="item">Item</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={"/List"} exact component={List}>
            <List />
          </Route>
          <Route path="/components/Item" exact component={Item}>
            <Item />
          </Route>
          <Route path={"/itempage"} component={ItemPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
