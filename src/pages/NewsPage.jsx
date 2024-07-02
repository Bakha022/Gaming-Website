import { Component, Fragment } from 'react'
import Hero from '../components/heroNews/Hero'
import Card from '../components/cardNews/NewsCard'
import Subscribe from '../components/subscribe/Subscribe'

export default class NewsPage extends Component {
	render() {
		return (
			<Fragment>

				<Hero />
				<section>
					<Card />
				</section>
				<div className='container'>
					<Subscribe />

				</div>
			</Fragment>
		)
	}
}
