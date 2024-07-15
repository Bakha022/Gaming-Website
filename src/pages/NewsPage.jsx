import { Component, Fragment } from 'react'
import Card from '../components/cardNews/NewsCard'
import Hero from '../components/heroNews/Hero'
import Subscribe from '../components/subscribe/Subscribe'

export default class NewsPage extends Component {
	render() {
		return (
			<Fragment>
				<Hero />
				<section>
					<Card />
				</section>
				<div className='container mb-5'>
					<Subscribe
						formColor={'#D6C5BB'}
						textColors={'#000000'}
						inputColor={'#000000'}
						buttonColor={'#D80027'}
					/>
				</div>
			</Fragment>
		)
	}
}
