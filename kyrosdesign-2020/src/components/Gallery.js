import React, { Component } from 'react';
//import Image from './Image';
import projects from './json/projects.json';

const items = [];

for (const [index, value] of projects.entries()) {
  items.push(
    <li className="project" key={index}>
      <div className="imageContainer">
          {value.type === "image" 
                      ? <img src="" alt={value.title}/>
                      : <video>
                          <source src="" />
                        </video> }
      </div>
        <h1 className="projectTitle">{value.title}</h1>
        <p className="projectType">{value.typography}</p>
    </li> 
  )
}

export default class Gallery extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1 className="pageTitle">Some of our works</h1>
        <ul className="projects">
          {items}
        </ul>
      </div>
    );
  }
}