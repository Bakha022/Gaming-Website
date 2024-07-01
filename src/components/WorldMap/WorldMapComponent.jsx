import React, { Component } from 'react'




import { Link } from 'react-router-dom'

import { PiPhoneCallFill } from "react-icons/pi"
import { IoLocation } from "react-icons/io5";



import svg from '../../assets/svg/Huge-Global.svg'
import facebook from "../../assets/svg/facebook.svg"
import instagram from "../../assets/svg/instagram.svg"
import linkedin from "../../assets/svg/linkedin.svg"
import twitter from "../../assets/svg/twitter.svg"


import style from './WorldMapComponent.module.css'



export default class WorldMapComponent extends Component {
	render() {
		return (
			<div className="container">
				<div className="d-flex justify-content-center mt-5">
					<img className='w-100' src={svg} alt="world-img" />
				</div>
				<div className="d-flex aligin-items-center">
					<div className={style["icons"]}>
						<p className={style['icon-text']}>Follow us</p>
						<div className={`${style["icon-social"]}`}>
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
					<div className={style["line"]}></div>
					<div className={style["call"]}>
						<PiPhoneCallFill />
						<span>+94 4444 5555 6</span>
					</div>
					<div className={style["line"]}></div>
					<div className={style["location"]}>
							<IoLocation/>
							<span>but also the leap into electronic 
							typesetting</span>
					</div>
				</div>
			</div>
		)
	}
}
