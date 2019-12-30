import React, { Component } from 'react';
import rgbw from "./img/collaborations/Wrgb Brand.svg";

export default class Collaborations extends Component {
  render() {
    return (
      <section className="collaborations">
        <h1 className="sectionTitle">Collaborations</h1>
        <h3 className="sectionSubtitle">Here are some companies we have collaborated with.</h3>
        <ul className="collaborationsList">
          <li className="collaboration">
            <img src={rgbw} className="collImage"></img><span>RGBW</span>
          </li>
          <li className="collaboration">
            <img></img>
          </li>
        </ul>
      </section>
    );
  }
}