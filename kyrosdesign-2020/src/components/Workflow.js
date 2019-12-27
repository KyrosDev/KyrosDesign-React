import React, { Component } from 'react';
import conversation from "./img/conversation.svg"
import drafts from "./img/sketch.svg"
import value from "./img/value.svg"

export default class Workflow extends Component {
  render() {
    return (
        <section className="workflow" id="workflow">
            <h1 className="sectionTitle">Work Process</h1>
            <h3 className="sectionSubtitle">Here I will explain how I work and how I proceed in creating my works</h3>
            <div className="workFlowContainer">
                <ul className="workFlowList">
                    <li className="workflowItem">
                        <div className="logoContainer">
                            <img src={drafts} alt="Drafts"/>
                        </div>
                        <h1 className="workflowItemTitle">Drafts and Proofs</h1>
                        <p className="workflowItemSubtitle">Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il.</p>
                    </li>
                    <li className="workflowItem">
                        <div className="logoContainer">
                            <img src={conversation} alt="Drafts"/>
                        </div>
                        <h1 className="workflowItemTitle">Customer comparision</h1>
                        <p className="workflowItemSubtitle">Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il.</p>
                    </li>
                    <li className="workflowItem">
                        <div className="logoContainer">
                            <img src={value} alt="Drafts"/>
                        </div>
                        <h1 className="workflowItemTitle">Care of details</h1>
                        <p className="workflowItemSubtitle">Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
  }
}