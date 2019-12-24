import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Footer from "./Footer";
import Workflow from './models/Workflow';
import Services from './models/Services';
import Sources from './models/Sources';
import Contact from './models/Contact';

export default class Homepage extends Component {
  render() {
    return (
      <div className="hubContainer">
        <div className="homePage">
          <h3 className="studyTitle titles">Web Developer and Designer</h3>
          <h1 className="title titles">KyrosDesign</h1>
          <p className="description">Do like me, build your future, create your style and start your career.</p>
          <a href="#contact" className="buttonBackground buttonHomepage">Contact</a>
          <img className="backgroundImage" src="" />
          <div className="swipe">
            <span className="ver"/>
            <span className="arr" />
            <span className="arr" />
          </div>
        </div>
        <Workflow />
        <Services />
        <Sources />
        <Contact />
        <Footer />
      </div>
    );
  }
}
