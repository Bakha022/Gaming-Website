import React, { Component } from 'react';
import styles from "./AboutHero.module.css";
import { Link, NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import image1 from "../../assets/images/about-1.png";

export class AboutHero extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className='container'>
        <div className={styles.about__hero}>
          <div className={styles['about__hero--left']}>
            <div className={styles['about__hero--left--link']}>
              <Link className={styles.whiteLink} to="/">Home</Link> &gt; <Link to="/about-us" className={styles.redLink}>About us</Link>
            </div>
            <h2 className={styles['about__hero--left--title']}>Lorem Ipsum is simply dummy text of the printing and.</h2>
            <p className={styles['about__hero--left--text']}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <NavLink className={styles['about__hero--btn']}>Get in touch -&gt;</NavLink>
          </div>
          <div className={styles['about__hero--right']}>
                <img src={image1} alt="Slide 1" />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutHero;
