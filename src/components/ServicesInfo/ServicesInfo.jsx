import React, { Component } from 'react'
import image1 from "../../assets/images/services-1.png"
import play from "../../assets/images/services-play.svg"

import styles from "./ServicesInfo.module.css";
export class ServicesInfo extends Component {
  render() {
    return (
      <div className={`container ${styles['services__container--info']}`}>
        <div className={styles['services__container--info-left']}>
          <img src={image1} alt="" />
          <div className={styles['services__container--info-left--play']}>
          <img src={play} alt="" />
          </div>
        </div>
        <div className={styles['services__container--info-right']}>
          <h2>Lorem Ipsum is simply dummy text.</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
          <ul>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ServicesInfo