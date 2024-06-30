import { Component } from 'react'


import { FaChevronRight } from "react-icons/fa";


import style from './ContactTextsComponent.module.css'

export default class ContactTextsComponent extends Component {
	render() {
		return (
			<div className="container">
				<div className='d-flex  justify-content-center'>
				<p className='first-text  d-flex  align-items-center gap-1 aligin-center ustify-content-center'>	
						<span className='location-head'>Home</span>
						<FaChevronRight size={16} />
						<span className='location-main'>Contact us</span>
				</p>
				</div>
				<h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
				<p className='second-text'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
				</p>
			</div>
		)
	}
}
