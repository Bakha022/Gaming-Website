import React, { Component } from 'react'

import styles from "./AboutInfo.module.css";

import image2 from "../../assets/images/about-2.png";

export class AboutInfo extends Component {
  render() {
    return (
      <div className={styles.about__info}>
           <div className={`container ${styles['about__info--container']}`}>
            <div className={styles['about__info--left']}>
              <img src={image2} alt="image" />
            </div>
            <div className={styles['about__info--right']}>
              <p className={styles['about__info--text1']}>Lorem ipsum</p>
              <h2 className={styles['about__info--title']}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
              <p className={styles['about__info--text2']}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
           </div>
      </div>
    )
  }
}

export default AboutInfo