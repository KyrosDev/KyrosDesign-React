import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const services = [
  {
    name: "UI Design",
    description: "Give a magical touch to your applications and enchant your users with the fantastic interfaces.",
    italianDescription: "Dai un tocco magico alle tue applicazioni/siti e incanta i tuoi utenti con le fantastiche interfacce."
  },
  {
    name: "UX Design",
    description: "Amaze and help your customers by choosing the best interface for your applications, making it easy to use!",
    italianDescription: "Stupisci e aiuta i tuoi clienti scegliendo la migliore interfaccia per la tua app, rendendola facile da usare!"
  },
  {
    name: "WebDevelopment",
    description: "Start your business from a beatiful website. You don't need to know how to program, just one click!",
    italianDescription: "Inizia la tua attività da un bellissimo sito Web. Non devi sapere come programmare, basta un clic!"
  },
  {
    name: "Graphic Design",
    description: "Attract your customers using your company's image. Don't you have one? Buy one, what are you waiting for !?",
    italianDescription: "Attira i tuoi clienti usando l'immagine della tua azienda. Non ne hai una? Comprane una, che aspetti!? "
  },
  {
    name: "Video Making",
    description: "Do you already have a business? Do you need some advertising? Create your spot, and amaze your users!",
    italianDescription: "Hai gia un'attivita? Hai bisogno di un po' di pubblicita? Crea il tuo spot, e stupisci i tuoi utenti!"
  },
  {
    name: "WebHosting",
    description: "Choose a domain and put your Application or WebApplication online through our Virtual Private Server or WebHosting.",
    italianDescription: "Scecgli un dominio e metti online la tua applicazione o webapp tramite le nostre Virtual Private Server o webhosting."
  },
]

const items = [];

for (const [index, value] of services.entries()) {
  items.push(
    <li className="service" key={index}>
      <h1 className="serviceTitle">{value.name}</h1>
      <p className="serviceDescription">{value.description}</p>
      {value.name !== "WebHosting" ? <Link to="/services" className="button moreButton">Learn more</Link> : <a href="https://fiveshot.tech/" className="button moreButton">Learn more</a>}
    </li>
  );
}

export default class Services extends Component {
  render() {
    return (
        <section className="services">
            <h1 className="sectionTitle">Services</h1>
            <h3 className="sectionSubtitle">Here you can find all the services I offer to my customers</h3>
            <ul className="services">
              {items}
            </ul>
            <div id="resources" />
        </section>
    );
  }
}
