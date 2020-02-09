import React from 'react';
import { Switch, Route } from "react-router-dom";
import './assets/scss/AppV2.css';
import Navbar from "./components/Nav";
import Gallery from "./components/Gallery";
import Default from "./components/Default";
import Details from "./components/Details";
import admMails from "./admin/components/adminMails";
import Terms from "./components/terms";
import Cookies from "./components/cookies";
import Policy from "./components/policy";
import Services from './components/Services';
import Store from './components/Store';
import HomeV2 from './views/Home';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeV2} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Gallery} />
        <Route path="/terms" component={Terms} />
        <Route path="/store" component={Store} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/policy" component={Policy} />
        <Route path="/details" component={Details}/>
        <Route path="/admin/emails" component={admMails}/>
        <Route component={Default}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;