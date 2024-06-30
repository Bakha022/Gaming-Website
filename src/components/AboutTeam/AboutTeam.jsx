import React, { Component } from 'react'

import styles from  "./AboutTeam.module.css";
import TeamCard from '../card/TeamCard';
export class AboutTeam extends Component {
  render() {
    let {teamMembers}=this.props;
    return (
      <div className={`container ${styles['about__team--container']} `}>
        <h2 className={styles['about__team--title']}>Our Team</h2>
        <div className={styles['about__team--row']}>
          {teamMembers.map((member)=><TeamCard key={member.id} {...member}/>)}
        </div>
      </div>
    )
  }
}

export default AboutTeam