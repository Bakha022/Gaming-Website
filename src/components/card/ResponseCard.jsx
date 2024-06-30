import React, { Component } from 'react'

import styles from "./Card.module.css"
export class ResponseCard extends Component {
  render() {
    let {text1,title,text2}=this.props
    return (
      <div className={styles.response__card}>
        <p className={styles['response__card--text1']}>{text1}</p>
        <h2 className={styles['response__card--title']}>{title}</h2>
        <p className={styles['response__card--text2']}>{text2}</p>
      </div>
    )
  }
}

export default ResponseCard