import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const services = ["UI Design", "UX Design", "Web Development", "Graphic Design"];
const descriptions = ["Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il.", "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il.", "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il.", "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il."]
const items = [];

for (const [index, value] of services.entries()) {
  items.push(
    <li className="service" key={index}>
      <h1 className="serviceTitle">{value}</h1>
      <p className="serviceDescription">{descriptions[index]}</p>
      <Link to="/" className="button moreButton">Learn more</Link>
    </li>
  );
}

export default class Services extends Component {
  render() {
    return (
        <section className="services">
            <h1 className="sectionTitle">Services</h1>
            <h3 className="sectionSubtitle">Here you can find all the services I offer to my customers</h3>
            <ul className="services">
              {items}
            </ul>
            <div id="resources" />
        </section>
    );
  }
}
