import React, { Component, Fragment } from 'react'
import FormComponent from '../components/Form/FormComponent'
import WorldMapComponent from '../components/WorldMap/WorldMapComponent'
import ContactTextsComponent from '../components/contact/ContactTextsComponent'
import Subscribe from '../components/subscribe/Subscribe'

export default class ContactPage extends Component {
	render() {
		return (
			<Fragment>
				<div className='contacts'>
					<div className='contact-top'>
						<ContactTextsComponent />
						<WorldMapComponent />
					</div>
					<FormComponent />
					<div className='contact-lorem'>
						<div className='container'>
							<Subscribe
								formColor={'#D6C5BB'}
								textColors={'#000000'}
								inputColor={'#000000'}
								buttonColor={'#D80027'}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}
