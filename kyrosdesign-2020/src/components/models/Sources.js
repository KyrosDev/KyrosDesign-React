import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const sources = ["PyRepoCreate", "Py-PasswordReminder", "PyIGDownloader"];
const versionSource = ["2.0.0", "0.4.2", "0.2.1"];
//const isNew = [true, false , false];
const sourceDescription = ["Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il.", "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il.", "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il."];

const items = [];

for (const [index, value] of sources.entries()) {
  items.push(
    <li className="source" key={index}>
      <div className="sourceContainer">
        {/*isNew[index] ? <p className="newSource">New</p> : null*/}
        <h1 className="sourceTitle">{value}</h1>
        <h3 className="sourceVersion">Version: {versionSource[index]}</h3>
        <p className="sourceDescription">{sourceDescription[index]}</p>
        <a href="/" className="button" download={sources[index]}>Download now</a>
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
