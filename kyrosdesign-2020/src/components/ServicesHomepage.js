import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import services from './json/services.json'

const items = [];

for (const [index, value] of services.entries()) {
  items.push(
    <li className="service" key={index}>
      <h1 className="serviceTitle">{value.name}</h1>
      <p className="serviceDescription">{value.description}</p>
      {value.name !== "WebHosting" ?
          <Link to="/services" className="button moreButton">Learn more</Link> :
          <a href="https://fiveshots.tech/" rel="noopener noreferrer" className="button moreButton" target="_blank">Learn more</a>
      }
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