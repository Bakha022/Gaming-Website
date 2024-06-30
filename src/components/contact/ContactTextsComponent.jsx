import React, { Component } from 'react'

import { FaChevronRight } from "react-icons/fa"


import style from './ContactTextsComponent.module.css'

export default class ContactTextsComponent extends Component {
	render() {
		return (
			<div className="container">
				<div className='d-flex  justify-content-center'>
					<p className='first-text  d-flex  align-items-center gap-1 aligin-center ustify-content-center'>
						<span className={style['location-head']}>Home</span>
						<FaChevronRight className='text-white' size={14} />
						<span className={style['location-main']}>Contact us</span>
					</p>
				</div>
				<h2 className={style['contact-title']}>Lorem Ipsum is simply dummy text of the printing and.</h2>
				<p className={style['second-text']}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</p>
			</div>
		)
	}
}
