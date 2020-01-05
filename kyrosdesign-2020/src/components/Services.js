import React, { Component } from 'react';
import Footer from './Footer';

export default class ServicesPage extends Component {
  render() {
    return (
      <div className="page">
        <h1 className="pageTitle">Services we can help you with.</h1>
        <ul className="serviceList">
          <li className="service">
            <div className="imageContainer">
              <img src="" alt=""/>
            </div>
            <h1 className="serviceTitle">Design</h1>
            <p className="serviceDescription">We specialize in user interface design, user experience design, digital design, mobile design, website design, interaction design, animation, motion graphics and website development (Custom, no WordPress or others.).</p>
            <ul className="serviceInServiceList">
              <li className="serviceInList">
                Mobile App Designs
              </li>
              <li className="serviceInList">
              Website Designs
              </li>
              <li className="serviceInList">
              UI/UX Enhancements
              </li>
              <li className="serviceInList">
              Interaction Designs
              </li>
              <li className="serviceInList">
              Graphic Designs
              </li>
            </ul>
          </li>
          <li className="service">
            <div className="imageContainer">
              <img src="" alt=""/>
            </div>
            <h1 className="serviceTitle">Motion</h1>
            <p className="serviceDescription">We specialize in motion design or in laymen terms we know as animation, motion graphics, and promo videos.</p>
            <ul className="serviceInServiceList">
              <li className="serviceInList">
                2D Animations
              </li>
              <li className="serviceInList">
              3D Animations
              </li>
              <li className="serviceInList">
              Promos
              </li>
              <li className="serviceInList">
              Professional Video Effects
              </li>
              <li className="serviceInList">
              Motion Graphics
              </li>
            </ul>
          </li>
        </ul>
        <Footer />
      </div>
    );
  }
}