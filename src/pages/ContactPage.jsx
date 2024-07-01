import React, { Component, Fragment } from 'react'
import WorldMapComponent from '../components/WorldMap/WorldMapComponent'
import ContactTextsComponent from '../components/contact/ContactTextsComponent'

export default class ContactPage extends Component {
	render() {
		return (
			<Fragment>
				<div className='contacts'>
					<div className='contact-top'>
						<ContactTextsComponent />
						<WorldMapComponent />
					</div>
				</div>
			</Fragment>
		)
	}
}
