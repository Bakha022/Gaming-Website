import React, { Component } from 'react'
import Subscribe from '../subscribe/Subscribe'

import styles from "./ServicesFooter.module.css";
export class ServicesFooter extends Component {
  render() {
    return (
      <div className={`container ${styles.services__footer} `}>
          <Subscribe formColor={'#ffffff'} textColors={'#000000'} inputColor={'#000000'} buttonColor={'#D80027'}/>
      </div >
    )
  }
}

export default ServicesFooter