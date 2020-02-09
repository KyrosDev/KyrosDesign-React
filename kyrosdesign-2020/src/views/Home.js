import React, { Component } from 'react';
import videoPlay from '../assets/svg/polygonSpan.svg'
import headerBackground from '../assets/svg/Background.svg'

export default class Home extends Component {
    render() {
        return (
            <section>
            
                <div className="header">
                    <div className="left">
                        <img src={headerBackground} alt="background" />
                    </div>
                    <div className="right">
                        <div className="right-container">    
                            <div className="titleComponent">
                                <span className="sectionTitleDriver"></span>
                                <p className="sectionSubtitle">Freelance Desingers and Developers</p>
                                <h1 className="sectionTitle">Create your <span className="titleColored">image</span> and <span className="titleColored">build</span> your Website<span className="textDot"></span></h1>
                            </div>
                            <ul className="inlineList buttonsList">

                                <li>
                                    <a href="/" className="button primaryButton">Get Started</a>
                                </li>

                                <li>
                                    <a href="/" className="button secondaryButton">Learn More</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="container">



                </div>
            </section>
        );
    }
}