import React, { Component } from 'react'

import styles from "./Services.module.css";
import { Link } from 'react-router-dom';
import ServicesHeroCard from '../card/ServicesHeroCard';

export class ServicesHero extends Component {
  render() {
    let {servicesInfo}=this.props
    return (
      <div className={`container ${styles.services__hero}`}>
        <div className={styles['services__hero--link']}>
          <Link className={styles.whiteLink} to="/">Home</Link> &gt; <Link className={styles.redLink} to="/services">Services</Link>
          </div>
          <h2 className={styles['services__hero--title']}>Lorem Ipsum is simply dummy text of the printing and.</h2>
          <p className={styles['services__hero--text']}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

          <div className={` container ${styles['services__hero--row']}`}>
            {servicesInfo.map((info)=><ServicesHeroCard key={info.id} {...info}/>)}
          </div>
      </div>
    )
  }
}

export default ServicesHero