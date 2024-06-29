import React, { Component } from 'react'

import "./Card.css"
export class AboutTeamCard extends Component {
  render() {
    let {img,name,text}=this.props
    return (
      <div className=' teamCard'>
        <img src={img} alt="" />
        <h2 className='teamCard__title'>{name}</h2>
        <p className='teamCard__text'>{text}</p>
      </div>
    )
  }
}

export default AboutTeamCard