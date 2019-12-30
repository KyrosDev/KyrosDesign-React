import React, { Component } from 'react';
import Footer from "./Footer";
import Workflow from './Workflow';
import Services from './Services';
import Contact from './Contact';

export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <div className="homePage">
          {/*h3 className="studyTitle titles">Web Developer and Designer</h3>*/}
          <h1 className="title titles"><span className="coloredText">Media</span> Design</h1>
          <p className="description">Do like me, build your future, create your style and start your career.</p>
          <a href="#contact" className="buttonBackground buttonHomepage">Contact</a>
        {window.innerWidth < 1440?<a href="/#workflow" className="swipe">
          <span className="ver"/>
          <span className="arr" />
          <span className="arr" />
        </a>: null}
        </div>
        {window.innerWidth >= 1440?<canvas className="canvas" />: null}
        <Workflow />
        <Services />
        <Contact  />
        <Footer   />
      </div>
    );
  }
}