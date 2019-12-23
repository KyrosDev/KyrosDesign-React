import React, { Component, setState } from 'react';
import logo from "../logo.svg"
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            hasClass: false
          }
          this.handleClick = this.handleClick.bind(this)
        }
        handleClick() {
          this.setState({
            hasClass: !this.state.hasClass
        })
    }

  render() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand">
                <img src={logo} className="brand-img" alt="kyrosdesign" /><span>KyrosDesign</span>
            </Link>
            <div className={this.state.hasClass ? 'menuListener opened' : 'menuListener closed'} onClick={this.handleClick}>
                <span />
                <span />
            </div>
            <ul className={this.state.hasClass ? 'menu opened' : 'menu closed'}>
                <div className="container">
                    <li className="menu-item">
                        <Link to="/" className="menu-link">Home</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/#workflow" className="menu-link">How i work</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/portfolio" className="menu-link">Portfolio</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/#sources" className="menu-link">Sources</Link>
                    </li>
                    <li className="menu-item buttonBackground">
                        <Link to="/#form" className="menu-link">Contact</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
  }
}