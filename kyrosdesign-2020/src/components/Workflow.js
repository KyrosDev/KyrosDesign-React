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
                        <p className="workflowItemSubtitle">Ordered a job, our team gets to work to try to recreate the customer's requests by creating drafts.</p>
                    </li>
                    <li className="workflowItem">
                        <div className="logoContainer">
                            <img src={conversation} alt="Drafts"/>
                        </div>
                        <h1 className="workflowItemTitle">Customer comparision</h1>
                        <p className="workflowItemSubtitle">Once the drafts are created, we show them to the customer, letting him choose the one that satisfies him most.</p>
                    </li>
                    <li className="workflowItem">
                        <div className="logoContainer">
                            <img src={value} alt="Drafts"/>
                        </div>
                        <h1 className="workflowItemTitle">Care of details</h1>
                        <p className="workflowItemSubtitle">Made the choice and based on the draft, we design the final work, focusing on the details.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
  }
}