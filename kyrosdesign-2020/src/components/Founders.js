import React, { Component } from 'react';

export default class FoundersCard extends Component {
  render() {
    return (
      <section className="founders">
          <h1 className="sectionTitle">About us</h1>
          <h3 className="sectionSubtitle">Lorem asd asd asd asd as asd as das da asdasd.a sdasd as.</h3>
          <ul className="founderCards">
              <li className="founderCard activated">
                  <div className="founderInfos">
                      <div className="imageContainer">
                          <img src="https://instagram.fcia1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/57040223_414861062624651_5672560429646217216_n.jpg?_nc_ht=instagram.fcia1-1.fna.fbcdn.net&_nc_ohc=WdpQs_d1lEcAX_W4TuW&oh=9a41221d48ed164e9988383e42f8b1c2&oe=5EAB5E1C" alt="" />
                      </div>
                      <span className="founderName">Vlad Alexandru</span>
                      <p className="occupation">WebDeveloper and Designer</p>
                  </div>
                  <p className="founderDescription">Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.</p>
              </li>
              <li className="founderCard disabled">
                  <div className="founderInfos">
                      <div className="imageContainer">
                          <img src="https://instagram.fcia1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/57040223_414861062624651_5672560429646217216_n.jpg?_nc_ht=instagram.fcia1-1.fna.fbcdn.net&_nc_ohc=WdpQs_d1lEcAX_W4TuW&oh=9a41221d48ed164e9988383e42f8b1c2&oe=5EAB5E1C" alt="" />
                      </div>
                      <span className="founderName">MyStrafe Name</span>
                      <p className="occupation">Occupation</p>
                  </div>
                  <p className="founderDescription">Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.</p>
              </li>
          </ul>
      </section>
    );
  }
}
