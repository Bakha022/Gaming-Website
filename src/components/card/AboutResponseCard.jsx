import React, { Component } from 'react'

export class AboutResponseCard extends Component {
  render() {
    let {text1,title,text2}=this.props;
    return (
      <div className='container '>
        <div className="response__box">
          <p className="response__box--text1">{text1}</p>
          <h2 className="response__box--title">{title}</h2>
          <p className="response__box--text2">{text2}</p>
        </div>
      </div>
    )
  }
}

export default AboutResponseCard