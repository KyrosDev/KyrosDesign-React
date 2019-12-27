import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import sources from "./json/resources.json";

const items = [];

for (const [index, value] of sources.entries()) {

  items.push(
    <li className="source" key={index}>
      <div className="sourceContainer">
        {/*isNew[index] ? <p className="newSource">New</p> : null*/}
        <h1 className="sourceTitle">{value.name}</h1>
        <h3 className="sourceVersion">Version: {value.version}</h3>
        <p className="sourceDescription">{value.description}</p>
        <a href="/" className="button" download={value.name}>Download now</a>
      </div>
    </li>
  );
}

export default class Sources extends Component {
  render() {
    return (
        <section className="resources">
          <h1 className="sectionTitle">Resources</h1>
          <h3 className="sectionSubtitle">Here i post some of my template projects and OS Codes.</h3>
          <div className="resourcesContainer">
            <ul className="sources">
              {items}
            </ul>
          </div>
          <Link to="/resources" className="button moreButton">More Resources</Link>
          <div id="contact" />
        </section>
    );
  }
}
