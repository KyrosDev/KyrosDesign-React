import React from 'react';
import { Switch, Route } from "react-router-dom";
import './assets/scss/AppV2.css';
//import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Default from "./components/Default";
import Details from "./components/Details";
import Homepage from "./components/Homepage";
import createProduct from "./components/admin/createProduct";
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
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/v2" component={HomeV2} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Gallery} />
        <Route path="/terms" component={Terms} />
        <Route path="/store" component={Store} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/policy" component={Policy} />
        <Route path="/details" component={Details}/>
        <Route path="/admin/products/create" component={createProduct}/>
        <Route path="/admin/emails" component={admMails}/>
        <Route component={Default}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;