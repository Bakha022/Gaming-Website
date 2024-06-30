import { Component } from 'react'
import { Link } from 'react-router-dom'

import facebook from "../../assets/svg/facebook.svg"
import instagram from "../../assets/svg/instagram.svg"
import twitter from "../../assets/svg/twitter.svg"
import linkedin from "../../assets/svg/linkedin.svg"

import Style from "./FooterComponent.module.css"

export default class FooterComponent extends Component {
	render() {
		return (
			<footer className={`${Style['footer']}`}>
				<div className="container">
					<div className={`${Style['footer-wrapper']}`}>
						<div className={`${Style['footer-info']}`}>
							<Link to="/">Logo</Link>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</p>
							<p>@Lorem</p>
						</div>
						<ul>
							<h4>About us</h4>
							<li>
								<Link to="/">Zeux</Link>
							</li>
							<li>
								<Link to="/">Portfolio</Link>
							</li>
							<li>
								<Link to="/">Careers</Link>
							</li>
							<li>
								<Link to="/">Contact us</Link>
							</li>
						</ul>
						<div className={`${Style['footer-contact']}`}>
							<h4>Contact us</h4>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</p>
							<p>+908 89097 890</p>
						</div>
						<div className={`${Style['footer-social']}`}>
							<Link>
								<img src={facebook} alt="" />
							</Link>
							<Link>
								<img src={instagram} alt="" />
							</Link>
							<Link>
								<img src={twitter} alt="" />
							</Link>
							<Link>
								<img src={linkedin} alt="" />
							</Link>
						</div>
					</div>
				</div>
				<div className={`${Style['footer-copyright']}`}>
					<p>Copyright ® 2022 prodesigner All rights Rcerved</p>
				</div>
			</footer>
		)
	}
}
