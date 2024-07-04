import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class NotFoundPage extends Component {
	render() {
		return (
			<Fragment>
				<div className='container'>
					<div className='noutfound-page'>
						<p className='error-title'>404</p>
						<p className='error-subtitle'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Recusandae fugiat explicabo illum dignissimos, ab doloribus!
						</p>
						<Link className='home-link' to={'/'}>
							Home
						</Link>
					</div>
				</div>
			</Fragment>
		)
	}
}
