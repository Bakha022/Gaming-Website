import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';

import image1 from "../assets/images/about-1.png";
import image2 from "../assets/images/about-2.png";

import AboutResponseCard from '../components/card/AboutResponseCard';
import AboutTeamCard from '../components/card/AboutTeamCard';
import CommonCall from '../components/card/CommonCall';


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

    teamMembers:[
      {
        id:"1",
        img:'/team-1.svg',
        name:"John peter",
        text:"coo"
      },
      {
        id:"2",
        img:'/team-2.svg',
        name:"John peter",
        text:"coo"
      },
      {
        id:"3",
        img:'/team-3.svg',
        name:"John peter",
        text:"coo"
      },
      {
        id:"4",
        img:'/team-4.svg',
        name:"John peter",
        text:"coo"
      }
    ]
  }
  render() {
    let { responses,teamMembers } = this.state;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Fragment>
        <section id='about'>
          <div className="container about__container">
            {/* <div className="about__container--header ">
            <div className="about__container--header--left">
              <a href="#link">Home &gt; <span>About us</span></a>
              <h2 className="about__container--header--title">Lorem Ipsum is simply dummy text of the printing and.</h2>
              <p className="about__container--header--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

              <NavLink to="/">Get in touch -&gt;</NavLink>
            </div>
            <div className="about__container--header--right">
              <Slider {...settings} className="slider-container">
                <div className='header__right--slick'>
                  <img src={image1} alt="image" />
                </div>
                <div className='header__right--slick'>
                  <img src={image1} alt="image" />
                </div>
              </Slider>
            </div>
          </div> */}
            <div className="about__container--request">
              <h2 className='about__container--request--title'>Why work with us</h2>
              <div className='response__container'>
                {responses.map((response) => <AboutResponseCard key={response.id} {...response} />)}
              </div>
            </div>


          </div>
          <div className="container-fluid about__container--info">
          <div className="about__container--info2 container">
            <div className="about__container--info--left">
              <img src={image2} alt="image" />
            </div>
            <div className="about__container--info--right">
              <p className="info--right--text1">Lorem ipsum</p>
              <h2 className='info--right--title'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>

              <p className="info--right--text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
            </div>
          </div>

          <div className="container about__container">
            <div className="about__container--team">
              <h2 className='about__container--team--title'>Our Team</h2>

              <div className=" team__members">
                {teamMembers.map((member)=> <AboutTeamCard key={member.id} {...member}/>)}
              </div>
            </div>

            <div className="about__container--call">
               <h2 className="about__container--call--title">Lorem ipsum</h2>
               <p className='about__container--call-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

               <CommonCall />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default AboutPage;
