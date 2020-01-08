import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "./img/logo.svg";

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
                <span className="author">MediaDesign</span>
              </li>
            </ul>
          </div>
          <div className="footerLinks">
            <ul className="otherLinks">
              <h1 className="listTitle">Socials</h1>
              <li className="link">
                <a href="https://www.instagram.com/mdesign.studios" rel="noopener noreferrer" target="_blank">Instagram</a>
              </li>
              <li className="link">
                <a href="https://www.github.com/MediaDesignStudios" rel="noopener noreferrer" target="_blank">GitHub</a>
              </li>
              <li className="link">
                <a href="https://www.twitter.com/MediaDesignSTD" rel="noopener noreferrer" target="_blank">Twitter</a>
              </li>
              <li className="link">
                <a href="/" rel="noopener noreferrer" target="_blank">YouTube</a>
              </li>
            </ul>
            <ul className="links">
              <h1 className="listTitle">Support</h1>
              <li className="link">
                <Link to="/terms">Legal Terms</Link>
              </li>
              <li className="link">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li className="link">
                <Link to="/cookies">Cookie Policy</Link>
              </li>
            </ul>
            <ul className="collaborationsLinks">
              <h1 className="listTitle">Collaborations</h1>
              <li className="link">
                <a href="https://fiveshots.tech/" rel="noopener noreferrer" target="_blank">FiveShots</a>
              </li>
              <li className="link">
                <a href="https://wallpapersrgb.com/" rel="noopener noreferrer" target="_blank">RGBWallpapers</a>
              </li>
            </ul>
          </div>
          <p className="copyrights">© 2020 Media Design. All rights reserved. Website designed by <a  href="https://www.instagram.com/__v.alecs__" rel="noopener noreferrer" target="_blank">KyrosDesign</a>.</p>
          <p className="copyrights">For more info send an email at: <span className="mail">mediadesign.business@gmail.com</span></p>
        </div>
      </footer>
    );
  }
}