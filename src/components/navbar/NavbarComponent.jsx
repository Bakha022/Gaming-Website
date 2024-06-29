import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Style from "./NavbarComponent.module.css"

export default class NavbarComponent extends Component {
	render() {
		return (
			<div className='container'>
				<nav className={`${Style['nav']}`}>
					<Link to="/" className={`${Style['logo']}`}>
						logo
					</Link>
					<div className={`${Style['nav-list-wrapper']}`}>
						<ul>
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/about">About us</NavLink>
							</li>
							<li>
								<NavLink to="/portfolio">Portfolio</NavLink>
							</li>
							<li>
								<NavLink to="/news">News</NavLink>
							</li>
						</ul>
						<li className={`${Style['contact-btn']}`}>
							<NavLink to='/contact'>Contact us</NavLink>
						</li>
					</div>
					<button className={`${Style['close-btn']}`}>
						<FontAwesomeIcon icon={faBars} size="lg" color="red" />
					</button>
				</nav>
			</div>
		)
	}
}
