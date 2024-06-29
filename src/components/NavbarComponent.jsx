import { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class NavbarComponent extends Component {
	render() {
		return (
			<div className='container'>
				<div className="logo">
					<div className='nav-left'>
						<Link to={'/'}>
							Logo
						</Link>
					</div>
					<div className="nav-right">
						<ul>
							<li>
								<NavLink to={"/"}>Home</NavLink>
							</li>
							<li>
								<NavLink to={'/about'}>About us</NavLink>
							</li>
							<li>
								<NavLink to={"/portfolio"}>Portfolio</NavLink>
							</li>
							<li>
								<NavLink to={"/news"}>News</NavLink>
							</li>
						</ul>
						<button>
							<Link to={'/contact'}>
								Contact us
							</Link>
						</button>
					</div>
				</div>
			</div>
		)
	}
}
