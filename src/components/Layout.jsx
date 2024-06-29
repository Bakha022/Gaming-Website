import React, { Component, Fragment } from 'react'
import NavbarComponent from './NavbarComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from './FooterComponent'

export default class Layout extends Component {
	render() {
		return (
			<Fragment>
				<NavbarComponent/>
				<main>
					<Outlet/>
				</main>
				<FooterComponent/>
			</Fragment>
		)
	}
}
