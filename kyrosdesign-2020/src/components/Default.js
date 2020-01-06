import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Default extends Component {

  componentDidMount(){
    document.title = "MediaDesign | Whoops...";
  }

  render() {
    return (
    <div className="nf">
        <h1 className="pageTitle">Whoops...</h1>
        <h3 className="pageSubtitle">It appears that this page does not exist.</h3>
        <Link to="/" className="button">Home</Link>
    </div>
    );
  }
}
