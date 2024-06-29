import React, { Component } from 'react'

import "./Card.css"
export class CommonCall extends Component {
  render() {
    return (
      <div className='commonCall'>
        <div className="commonCall__left">
          <h2 className='commonCall__left--title'>Stay in the loop</h2>
          <p className="commonCall__left--text">Subscribe to receive the latest news and updates about TDA. <br />
          We promise not to spam you! </p>
        </div>
        <div className="commonCall__right">
          <form>
            <input type="text" placeholder='Enter email address'/>
            <button>Continue</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CommonCall