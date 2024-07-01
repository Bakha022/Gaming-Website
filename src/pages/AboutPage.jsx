import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';

// import image1 from "../../assets/images/about-1.png";


import AboutHero from '../components/AboutHero/AboutHero';
import AboutResponse from '../components/AboutResponse/AboutResponse';
import AboutInfo from '../components/AboutInfo/AboutInfo';
import AboutTeam from '../components/AboutTeam/AboutTeam';


export class AboutPage extends Component {
  state = {
    responses: [
      {
        id: '1',
        text1: "Lorem ipsum",
        title: "Lorem Ipsum",
        text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      },
      {
        id: '2',
        text1: "Lorem ipsum",
        title: "Lorem Ipsum",
        text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      },
      {
        id: '3',
        text1: "Lorem ipsum",
        title: "Lorem Ipsum",
        text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      }
    ],

    teamMembers: [
      {
        id: "1",
        img: '/team-1.svg',
        name: "John peter",
        text: "coo"
      },
      {
        id: "2",
        img: '/team-2.svg',
        name: "John peter",
        text: "coo"
      },
      {
        id: "3",
        img: '/team-3.svg',
        name: "John peter",
        text: "coo"
      },
      {
        id: "4",
        img: '/team-4.svg',
        name: "John peter",
        text: "coo"
      }
    ]
  }
  render() {
    let { responses, teamMembers } = this.state;
    return (
      <Fragment>
        <section id='about'>
          <AboutHero/>
          <AboutResponse responses={responses}/>
          <AboutInfo/>
          <AboutTeam teamMembers={teamMembers}/>
        </section>
      </Fragment>
    );
  }
}

export default AboutPage;
