import React, { Component, Fragment } from 'react'
import ContactTextsComponent from '../components/contact/ContactTextsComponent'
import WorldMapComponent from '../components/contact/WorldMapComponent'


export default class ContactPage extends Component {
	render() {
		return (
			<Fragment>
				<div className="contacts">
					<ContactTextsComponent />
					<WorldMapComponent/>
				</div>
			</Fragment>
		)
	}
}
