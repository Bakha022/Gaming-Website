import { Component, Fragment, } from 'react'

import HomeHero from '../components/HomeHero/HomeHero'
import TrandingGames from '../components/TrandingGames/TrandingGames'
import CallOfDuty from '../components/CallOfDuty/CallOfDuty'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import RecentProjects from './../components/RecentProjects/RecentProjects';


export default class HomePage extends Component {
	render() {
		return (
			<Fragment>
				<HomeHero />
				<TrandingGames />
				<CallOfDuty />
				<HomeBanner />
				<RecentProjects />
			</Fragment>
		)
	}
}
