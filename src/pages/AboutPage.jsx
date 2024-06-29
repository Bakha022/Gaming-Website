import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';

import image1 from "../assets/images/about-1.png";
import AboutResponseCard from '../components/card/AboutResponseCard';


export class AboutPage extends Component {
  state={
     responses:[
      {
        id:'1',
       text1:"Lorem ipsum",
       title:"Lorem Ipsum",
       text2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      },
      {
        id:'2',
        text1:"Lorem ipsum",
        title:"Lorem Ipsum",
        text2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      },
      {
        id:'3',
       text1:"Lorem ipsum",
       title:"Lorem Ipsum",
       text2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      }
    ]
  }
  render() {
    let {responses}=this.state;
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
              {responses.map((response)=><AboutResponseCard key={response.id} {...response}/>)}
            </div>
          </div>
        </div>
        </section>
      </Fragment>
    );
  }
}

export default AboutPage;
