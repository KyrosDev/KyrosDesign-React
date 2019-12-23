import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Footer from "./Footer";

export default class Hub extends Component {
  render() {
    return (
      <div className="hubContainer">
        <div className="homePage">
          <h3 className="studyTitle titles">Web Developer and Designer</h3>
          <h1 className="title titles">KyrosDesign</h1>
          <p className="description">Do like me, build your future, create your style and start your career.</p>
          <Link to="/#contact" className="buttonBackground buttonHomepage">Contact</Link>
          <img className="backgroundImage" src="" />
          <Link to="/#about" className="swipe">
            <span className="ver"/>
            <span className="arr" />
            <span className="arr" />
          </Link>
        </div>
        <section className="workflow" ref="about">
          <h1 className="sectionTitle">Work Process</h1>
          <h3 className="sectionSubtitle">Here I will explain how I work and how I proceed in creating my works</h3>
        </section>
        <section className="services" ref="services">
          <h1 className="sectionTitle">Services</h1>
          <h3 className="sectionSubtitle">Here you can find all the services I offer to my customers</h3>
        </section>
        <section className="sources" ref="sources">
          <h1 className="sectionTitle">Sources</h1>
          <h3 className="sectionSubtitle">Here i post some of my template projects and OS Codes.</h3>
        </section>
        <Footer />
      </div>
    );
  }
}
