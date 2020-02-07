import React, { Component } from 'react';
import logoTextWhite from '../assets/svg/logoTextWhite.svg';

export default class Home extends Component {
    render() {
        return (
            <section>
                <div className="left">
                </div>
                <div className="right">
                    <div className="titleComponent">
                        <span className="sectionTitleDriver"></span>
                        <h1 className="sectionTitle">Media Design Studios</h1>
                        <p className="sectionSubtitle">Freelance Desingers and Developers</p>
                    </div>
                    <ul className="inlineList buttonsList">

                        <li>
                            <a className="button primaryButton">Get Started</a>
                        </li>

                        <li>
                            <a className="button secondaryButton"><span className="triangle"></span>Learn More</a>
                        </li>

                    </ul>
                </div>
            </section>
        );
    }
}