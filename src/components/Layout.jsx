import { Component, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import FooterComponent from './FooterComponent'
import NavbarComponent from './navbar/NavbarComponent';

export default class Layout extends Component {
	render() {
		return (
			<Fragment>
				<NavbarComponent />
				<main>
					<Outlet />
				</main>
				<FooterComponent />
			</Fragment>
		)
	}
}
