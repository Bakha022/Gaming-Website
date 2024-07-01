import React, { Component } from 'react'

import { PacmanLoader } from 'react-spinners'


import style from './LoadingComponent.module.css'

export default class LoadingComponent extends Component {
	render() {
		return (
			<div className={style['loading']}>
				<PacmanLoader className={style['laoding-icon']} 
				size={76} 
				color="red" />
			</div>
		)
	}
}
