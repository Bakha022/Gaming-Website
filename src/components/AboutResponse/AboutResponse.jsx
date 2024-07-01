import React, { Component } from 'react'

import styles from "./AboutResponse.module.css";
import ResponseCard from '../card/ResponseCard';
export class AboutResponse extends Component {
  render() {
    let {responses}=this.props
    return (
      <div className="container">
        <div className={styles.response}>
          <h2 className={styles.response__title}>Why work with us</h2>

          <div className={styles.response__row}>
            {responses.map((response)=><ResponseCard key={response.id} {...response}/>)}
          </div>
        </div>
      </div>
    )
  }
}

export default AboutResponse