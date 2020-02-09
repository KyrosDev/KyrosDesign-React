import React, { Component} from 'react';
import logo from "../assets/svg/navbarLogo.svg"
import userDefaultLogo from '../assets/svg/User.svg'
import {Link} from "react-router-dom";

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasClass: false,
            subMenuOpened: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.activeSubmenu = this.activeSubmenu.bind(this);
    }

    handleClick() {
        this.setState({
            hasClass: !this.state.hasClass
        });
    }

    activeSubmenu() {
        this.setState({
            subMenuOpened: !this.state.subMenuOpened
        });
    }

  render() {
    return (
      <nav className="navbar">
          <Link to="/" className="nav-brand">
                <img src={logo} className="brand-img" alt="mediadesign"/>
        </Link>
        <div className={this.state.hasClass ? 'menuListener opened' : 'menuListener closed'} onClick={this.handleClick}>
            <span />
            <span />
        </div>
        <ul className="itemsList">
            <li className="item">
                <Link to="/">Home</Link>
            </li>
            <li className="item">
                <Link to="/">Projects</Link>
            </li>
            <li className="item">
                <Link to="/">Portfolio</Link>
            </li>
            <li className="item">
                <Link to="/">Shop</Link>
            </li>
        </ul>
        <span onClick={this.activeSubmenu}>
            <img src={userDefaultLogo} alt="logo"/>
            <ul className={this.state.subMenuOpened ? "subMenu openedSubMenu" : "subMenu closedSubMenu"}>
                <li className="subMenuItem">
                    <Link to="">Profile</Link>
                </li>
                <li className="subMenuItem">
                    <Link to="">Settings</Link>
                </li>
                <li className="subMenuItem">
                    <Link to="">Logout</Link>
                </li>
            </ul>
        </span>
      </nav>
    );
  }
}
