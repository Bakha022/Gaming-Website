import React, { Component } from 'react'

import styles from "./Card.module.css";
export class TeamCard extends Component {
  render() {
    let {img,name,text}=this.props
    return (
      <div className={styles.team__card}>
        <img src={img} alt="" />
        <h2 className={styles['team__card--title']}>{name}</h2>
        <p className={styles['team__card--text']}>{text}</p>
      </div>
    )
  }
}

export default TeamCard