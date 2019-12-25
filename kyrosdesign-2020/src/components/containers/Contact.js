import React, { Component } from 'react';
import axios from 'axios';

export default class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      message: ''
    }

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeMessage(e) {
    this.setState({
      message: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const email = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    }

    axios.post('http://localhost:5000/emails/new', email).then(res => console.log(res.data));

    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  render() {
    return (
        <section className="contactForm">
            <h1 className="sectionTitle">Contact Us</h1>
            <h3 className="sectionSubtitle">Compile this form to send us an email.</h3>
            <form onSubmit={this.onSubmit}>
            <div className="contactContainer">
                <input autoComplete="off" placeholder="Your name..." onChange={this.onChangeName} required type="text" className="inputs"  id="name" name="name" value={this.state.name}/>
                <input autoComplete="off" placeholder="Your email..." onChange={this.onChangeEmail} required type="email" className="inputs"  id="email" name="email" value={this.state.email}/>
                <textarea placeholder="Message..." autoComplete="off" required height="200px" onChange={this.onChangeMessage} cols="20" type="text" className="inputs" id="message" name="message" value={this.state.message}/>
                <input type="submit" className="formButton" text="Submit"/>
            </div>
        </form>
      </section>
    );
  }
}
