import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { IoLocation } from 'react-icons/io5'
import { PiPhoneCallFill } from 'react-icons/pi'

import svg from '../../assets/svg/Huge-Global.svg'

import style from './WorldMapComponent.module.css'

export default class WorldMapComponent extends Component {
	render() {
		return (
			<div className='mt-5'>
				<div className='container'>
					<div className='d-flex justify-content-center'>
						<img className='w-100' src={svg} alt='world-img' />
					</div>
					<div className='d-flex align-items-center justify-content-between mt-5 flex-wrap'>
						<div className={style['icons']}>
							<p className={style['icon-text']}>Follow us</p>
							<div className={`${style['icon-social']}`}>
								<div className={style['icon']}>
									<Link>
										<FaInstagram size={22} color='white' />
									</Link>
								</div>
								<div className={style['icon']}>
									<Link>
										<FaTwitter size={22} color='white' />
									</Link>
								</div>
								<div className={style['icon']}>
									<Link>
										<FaTwitter size={22} color='white' />
									</Link>
								</div>
								<div className={style['icon']}>
									<Link>
										<FaLinkedinIn size={22} color='white' />
									</Link>
								</div>
							</div>
						</div>
						<div className={style['line']}></div>
						<div className={style['call']}>
							<PiPhoneCallFill size={30} />
							<span>+94 4444 5555 6</span>
						</div>
						<div className={style['line']}></div>
						<div className={style['location']}>
							<IoLocation color='white' size={29} />
							<span>but also the leap into electronic typesetting</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
