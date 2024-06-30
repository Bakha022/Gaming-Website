import React, { Component, Fragment } from 'react'
import ContactTextsComponent from '../components/contact/ContactTextsComponent'

export default class ContactPage extends Component {
	render() {
		return (
			<Fragment>
				<div className="contacts">
					<ContactTextsComponent/>
				</div>
			</Fragment>
		)
	}
}
