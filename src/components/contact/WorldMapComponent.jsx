import React, { Component } from 'react'

import svg from '../../assets/svg/Huge-Global.svg'


import { Link } from 'react-router-dom'
import facebook from "../../assets/svg/facebook.svg"
import instagram from "../../assets/svg/instagram.svg"
import linkedin from "../../assets/svg/linkedin.svg"
import twitter from "../../assets/svg/twitter.svg"



export default class WorldMapComponent extends Component {
	render() {
		return (
			<div className="container">
				<div className="d-flex justify-content-center mt-5">
					<img className='w-100' src={svg} alt="world-img" />
				</div>
				<div className="">
					<div className="icons">
						<p></p>
						<div className="d-flex">
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
			</div>
		)
	}
}
