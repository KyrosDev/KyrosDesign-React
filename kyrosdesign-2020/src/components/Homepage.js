import React, { Component } from 'react';
import Footer from "./Footer";
import Workflow from './Workflow';
import Services from './Services';
import Contact from './Contact';

export default class Homepage extends Component {

  constructor(props){

    super(props);

    this.state = {
      phrase: "We build your project, start your career and create your image."
    }

  }

  render() {
    return (
      <div className="container">
        <div className="homePage">
          <h3 className="studyTitle titles">Designers and Developers freelancers</h3>
          <h1 className="title titles"><span className="coloredText">Media</span> Design</h1>
          <p className="description">{this.state.phrase}</p>
          <a href="#contact" className="buttonBackground buttonHomepage">Contact</a>
        {window.innerWidth < 1440?<a href="/#workflow" className="swipe">
          <span className="ver"/>
          <span className="arr" />
          <span className="arr" />
          </a>: null}
        </div>
        <Workflow />
        <Services />
        <Contact  />
        <Footer   />
      </div>
    );
  }
}