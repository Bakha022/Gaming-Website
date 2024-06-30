import React, { Component } from 'react'

import styles from "./Card.module.css";
export class ServicesHeroCard extends Component {
  render() {
    let {img,numbers,title}=this.props
    return (
      <div className={styles['info__card--services']}>
        <div className={styles['info__card--img']}>
          <img src={img} alt="image" />
        </div>
        <div className={styles['info__card--right']}>
          <h2>{numbers}</h2>
          <p>{title}</p>
        </div>
      </div>
    )
  }
}

export default ServicesHeroCard