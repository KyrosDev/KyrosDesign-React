import React, { Component } from 'react';

const services = ["1", "2", "3"];
const items = [];

for (const [index, value] of services.entries()) {
  items.push(
    <li key={index}>{value}</li>
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
