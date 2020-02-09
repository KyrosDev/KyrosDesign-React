import React, { Component} from 'react';
import logo from "../assets/svg/navbarLogo.svg"
import userDefaultLogo from '../assets/svg/User.svg'
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
                <img src={logo} className="brand-img" alt="kyrosdesign" />
            </Link>
            {window.innerWidth < 1024?<div className={this.state.hasClass ? 'menuListener opened' : 'menuListener closed'} onClick={this.handleClick}>
                <span />
                <span />
            </div>: null }
    <ul className={window.innerWidth < 1024 ? this.state.hasClass ? 'menu opened' : 'menu closed': "menu"}>
                <div className="navContainer">
                    <li className="menu-item">
                        <Link to="/" className="menu-link">Home</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/store" className="menu-link">Projects</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/projects" className="menu-link">Portfolio</Link>
                    </li>
                    <li className="menu-ite">
                        <a href="/" className="menu-link">Shop</a>
                    </li>
                </div>
            </ul>
        </nav>
    );
  }
}