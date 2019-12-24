import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
        <section className="contactForm">
            <h1 className="sectionTitle">Contact Us</h1>
            <h3 className="sectionSubtitle">Compile this form to send us an email.</h3>
            <form action="" method="GET">
            <div className="contactContainer">
                <input placeholder="Your email..." required type="email" className="inputs"  id="email"name="email"/>
                <textarea placeholder="Message..." required height="200px" cols="20" type="text" className="inputs" id="message" name="message"/>
                <input type="submit" className="button buttonBackground" text="Submit"/>
            </div>
        </form>
      </section>
    );
  }
}
