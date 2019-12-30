import React, { Component} from 'react';
import logo from "./img/logo.svg"
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
        });
    }

  render() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand">
                <img src={logo} className="brand-img" alt="kyrosdesign" /><span>MediaDesign</span>
            </Link>
            {window.innerWidth < 1024?<div className={this.state.hasClass ? 'menuListener opened' : 'menuListener closed'} onClick={this.handleClick}>
                <span />
                <span />
            </div>: null}
            <ul className={window.innerWidth < 1024?this.state.hasClass ? 'menu opened' : 'menu closed': "menu"}>
                <div className="navContainer">
                    <li className="menu-item">
                        <Link to="/" className="menu-link">Home</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/store" className="menu-link">Store</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/portfolio" className="menu-link">Portfolio</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/#contact" className="menu-link">Contact</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
  }
}