import React from "react";
import { Switch, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import SingleCountry from "./pages/SingleCountry";
import Header from "./components/Header";

import './index.css';


function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Countries />
        </Route>

        <Route path="/singlecountry">
          <SingleCountry />
        </Route>
      </Switch>
      
      
   </div>
  );
}

export default App;
