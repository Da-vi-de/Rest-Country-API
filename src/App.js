import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Countries from "./pages/Countries";
import SingleCountry from "./pages/SingleCountry";
import Header from "./components/Header";

import './index.css';

// Sequence of what is rendered
// The step in second Route is needed for showing the single country when the image is clicked on Card component,
// check Card component and SingleCountry page for a better understanding.
function App() {
  return (
    <div>
      <Header />
     
      <Switch>
        <Route exact path="/">
          <Countries />
        </Route>

        <Route path="/singlecountry/:name" >
        <SingleCountry />
        </Route>
      </Switch>
     
   </div>
  );
}

export default App;
