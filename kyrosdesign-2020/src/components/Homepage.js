import React, { Component } from 'react';
import Footer from "./Footer";
import Workflow from './containers/Workflow';
import Services from './containers/Services';
import Sources from './containers/Sources';
import Contact from './containers/Contact';

export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <div className="homePage">
          <h3 className="studyTitle titles">Web Developer and Designer</h3>
          <h1 className="title titles">KyrosDesign</h1>
          <p className="description">Do like me, build your future, create your style and start your career.</p>
          <a href="#contact" className="buttonBackground buttonHomepage">Contact</a>
          <img className="backgroundImage" src="" alt=""/>
          <a href="#workflow" className="swipe">
            <span className="ver"/>
            <span className="arr" />
            <span className="arr" />
          </a>
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
