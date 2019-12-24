import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import arrowRight from './img/right-arrow (1).svg'
import logo from "./img/logo.png";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerContainer">
          <div className="authorContainer">
            <ul>
              <li className="logoContainer">
                <img src={logo} ref="Drafts" alt=""/>
              </li>
              <li>
                <span className="author">KyrosDesign</span>
              </li>
            </ul>
          </div>
          <ul className="otherLinks">
            <h1 className="listTitle">Socials</h1>
            <li className="link">
              <a href="https://www.instagram.com/__v.alecs__" rel="noopener noreferrer" target="_blank">Instagram</a><span className="arrow"><img src={arrowRight} alt=""/></span>
            </li>
            <li className="link">
              <a href="https://www.github.com/KyrosDev" rel="noopener noreferrer" target="_blank">GitHub</a><span className="arrow"><img src={arrowRight} alt=""/></span>
            </li>
            <li className="link">
              <a href="https://www.twitter.com/KyrosDes" rel="noopener noreferrer" target="_blank">Twitter</a><span className="arrow"><img src={arrowRight} alt=""/></span>
            </li>
            <li className="link">
              <a href="/" rel="noopener noreferrer" target="_blank">YouTube</a><span className="arrow"><img src={arrowRight} alt=""/></span>
            </li>
            <li className="link">
              <a href="https://t.me/KyrosDesign" rel="noopener noreferrer" target="_blank">Telegram</a><span className="arrow"><img src={arrowRight} alt=""/></span>
            </li>
          </ul>
          <ul className="links">
            <h1 className="listTitle">Support</h1>
            <li className="link">
              <Link to="/">Legal Terms</Link>
            </li>
            <li className="link">
              <Link to="/">Privacy Policy</Link>
            </li>
            <li className="link">
              <Link to="/">Cookie Policy</Link>
            </li>
          </ul>
          <p className="copyrights">Made by KyrosDesign © 2020</p>
        </div>
      </footer>
    );
  }
}
