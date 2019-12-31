import React, { Component } from 'react';

export default class Default extends Component {

  componentDidMount(){
    document.title += " | Whoops..."
  }

  render() {
    return (
    <section>
        <h1>404</h1>
        <h1 className="sectionTitle">Whoops, page not founded.</h1>
        <a href="/">Homepage</a>
    </section>
    );
  }
}
