import React, { Component, Fragment } from 'react'
import ServicesHero from '../components/ServicesHero/ServicesHero'

export default class Portfolio extends Component {
	state={
		servicesInfo:[
			{
				id:"1",
				img:"/info-1.svg",
				numbers:"90+",
				title:"Clients"
			},
			{
				id:"2",
				img:"/info-2.svg",
				numbers:"30+",
				title:"Countries"
			},
			{
				id:"3",
				img:"/info-3.svg",
				numbers:"50+",
				title:"Projects"
			}
		]
	}
	render() {
		let {servicesInfo}=this.state;
		return (
			<Fragment>
				<section id='services'>
					<ServicesHero servicesInfo={servicesInfo}/>
				</section>
			</Fragment>
		)
	}
}
