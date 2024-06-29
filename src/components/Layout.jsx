import { Component, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from './navbar/NavbarComponent';
import FooterComponent from './footer/FooterComponent';

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
