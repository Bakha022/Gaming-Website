import React, { Component } from 'react'
import Subscribe from '../subscribe/Subscribe'

import styles from "./Subscribe.module.css";
export class AboutSubscribe extends Component {
  render() {
    return (
      <div className={`container `}>
        <div className={styles.subscribe}>
        <Subscribe className={styles.subscibe__container} formColor={'#1C140F'} textColors={'#fff'} inputColor={'#ffffff'} buttonColor={'#D80027'}/>
        </div>
      </div>
    )
  }
}

export default AboutSubscribe