import React, { Component, Fragment } from 'react';
import ServicesHero from '../components/ServicesHero/ServicesHero';
import ServicesInfo from '../components/ServicesInfo/ServicesInfo';
import ServicesAdvertising from '../components/ServicesAdvertising/ServicesAdvertising';

export default class Portfolio extends Component {
  state = {
    servicesInfo: [
      {
        id: "1",
        img: "/info-1.svg",
        numbers: "90+",
        title: "Clients",
      },
      {
        id: "2",
        img: "/info-2.svg",
        numbers: "30+",
        title: "Countries",
      },
      {
        id: "3",
        img: "/info-3.svg",
        numbers: "50+",
        title: "Projects",
      },
    ],
    servicesAdvertising: [
      {
        id: "1",
        img: "./services-advertising-1.png",
        isTextLeft: false,
      },
      {
        id: "2",
        img: "./services-advertising-2.png",
        isTextLeft: true,
      },
      {
        id: "3",
        img: "./services-advertising-3.png",
        isTextLeft: false,
      },
    ],
  };

  render() {
    let { servicesInfo, servicesAdvertising } = this.state;
    return (
      <Fragment>
        <section id='services'>
          <ServicesHero servicesInfo={servicesInfo} />
          <ServicesInfo />
          <ServicesAdvertising servicesAdvertising={servicesAdvertising} />
        </section>
      </Fragment>
    );
  }
}
