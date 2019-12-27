import React, { Component } from 'react';
import axios from "axios";

const mails = [];
let emailString = [];
let now = new Date().toUTCString()
let nowList = now.split(" ")

export default class EmailsViewer extends Component {

    constructor(props) {
        super(props);

        this.load = this.load.bind(this);

        this.state = {
            loading: true,
            viewMails: '',
            currentMails: 0,
        }

    }

    async componentDidMount() {

        axios.get('http://localhost:5000/emails').then(res => {
    
            emailString =  JSON.parse(res.request.response)

            this.state.currentMails = emailString.length;
        
            for (const [index, value] of Array(emailString).entries()) {
                for (let i = 0; i < value.length; i++) {
                    mails.push(
                        <li className="emails" key={index}>
                            <div className="dataContainer">
                                {parseInt(nowList[1]) - parseInt(new Date(value[i].createdAt).toUTCString().split(" ")[1]) === 0?<span className="newMail">New</span>: null}
                                <h1 className="username">{value[i].name}</h1>
                                <h3 className="useremail">{value[i].email}</h3>
                                <p className="usermaildate">{new Date(value[i].createdAt).toUTCString().split(" ").slice(0, 4).join(" ")}</p>
                                <p className="usermessage">{value[i].message}</p>
                                <p className="resolved">{value[i].isResolved?"Resolved":"Unresolved"}</p>
                            </div>
                            <a className="sendMailButton" href={`mailto:${value[i].email}`} target="_blank" rel="noopener noreferrer">Send email</a>
                        </li>
                    );
                    mails.reverse();
                }
            }
                
        });

        await this.load()
    }

    load() {

        if (mails.length === 0) {
            setTimeout(() => {
                this.setState({
                    loading: false,
                    viewMails: mails,
                });
            }, 1000)
        }
    }

  render() {
    return (
      <div className="mailsContainer">
          {this.load()}
          {this.state.loading ? <div className="loader"><span /></div> : null}
          <h1>Emails</h1>
          <ul>
              {this.state.viewMails}
          </ul>
      </div>
    );
  }
}
