import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Default from "./components/Default";
import Details from "./components/Details";
import Homepage from "./components/Homepage";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/portfolio" component={Gallery} />
        <Route path="/image" component={Details}/>
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;