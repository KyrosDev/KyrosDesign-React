import React, { Component } from 'react';
import kyros from './img/cards/kyrosdesign.png';

export default class FoundersCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0
        };

        this.activeCard  = this.activeCard.bind(this);
        this.disableCard = this.disableCard.bind(this);

    }

    activeCard(cards, dots) {
        if (cards[this.state.index].classList.contains("activated")) {
            if (this.state.index === 1) {
                dots[this.state.index - 1].classList.add("activated");
                dots[this.state.index - 1].classList.remove("disabled");
                cards[this.state.index - 1].classList.remove("activated");
                cards[this.state.index - 1].classList.add("disabled");
            } else {
                dots[this.state.index + 1].classList.add("activated");
                dots[this.state.index + 1].classList.remove("disabled");
                cards[this.state.index + 1].classList.add("activated");
                cards[this.state.index + 1].classList.remove("disabled");
            }
        }
        if (cards[this.state.index].classList.contains("activated")) {
            dots[this.state.index].classList.remove("activated");
            dots[this.state.index].classList.add("disabled");
            cards[this.state.index].classList.remove("activted");
            cards[this.state.index].classList.add("disabled");
        }
    }

    disableCard(cards, dots) {
        if (cards[this.state.index].classList.contains("disabled")) {
            if (this.state.index === 1) {
                dots[this.state.index - 1].classList.add("activated");
                dots[this.state.index - 1].classList.remove("disabled");
                cards[this.state.index - 1].classList.add("activated");
                cards[this.state.index - 1].classList.remove("disabled");
            } else {
                dots[this.state.index + 1].classList.remove("activated");
                dots[this.state.index + 1].classList.add("disabled");
                cards[this.state.index + 1].classList.remove("activated");
                cards[this.state.index + 1].classList.add("disabled");
            }
        }
        if (cards[this.state.index].classList.contains("disabled")) {
            cards[this.state.index].classList.add("activated");
            cards[this.state.index].classList.remove("disabled");
            dots[this.state.index].classList.add("activated");
            dots[this.state.index].classList.remove("disabled");
        }
    }

    componentDidMount() {
        const cards = document.querySelectorAll('.founderCard');
        const dots = document.querySelectorAll('.dot');

        setInterval(() => {
            
            this.activeCard(cards, dots);
            
            this.state.index === 0 ? this.setState({index: 1}) : this.setState({index: 0});
            
            this.disableCard(cards, dots);

        }, 7500);

    }

  render() {
    return (
      <section className="founders">
          <h1 className="sectionTitle">About us</h1>
          <h3 className="sectionSubtitle">We are two guys how love design and innovations.</h3>
          <div className="scroll">
            <ul className="founderCards">
                <li className="founderCard activated left">
                    <div className="founderInfos">
                        <div className="imageContainer">
                            <img src={kyros} alt="" />
                        </div>
                        <span className="founderName">Alexandru V.</span>
                        <p className="occupation">WebDeveloper and Designer</p>
                    </div>
                    <p className="founderDescription">Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.</p>
                </li>
                <li className="founderCard disabled right">
                    <div className="founderInfos">
                        <div className="imageContainer">
                            <img src={kyros} alt="" />
                        </div>
                        <span className="founderName">Alessandro T.</span>
                        <p className="occupation">Modeller and Designer</p>
                    </div>
                    <p className="founderDescription">Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.</p>
                </li>
            </ul>
          </div>
          <ul className="indexes">
              <li className="index">
                  <span className="dot activated"></span>
              </li>
              
              <li className="index">
                  <span className="dot disabled"></span>
              </li>
          </ul>
      </section>
    );
  }
}
