import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "./img/logo.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerContainer">
          <div className="logoContainer">
            <img src={logo} alt="Drafts"/>
          </div>
          <span className="author">KyrosDesign</span>
          <ul className="links">
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
          <span className="powered">Powered by <Link to="/">KyrosDesign</Link></span>
          <p className="copyrights">Copyright</p>
        </div>
      </footer>
    );
  }
}
