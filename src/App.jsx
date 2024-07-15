import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingComponent from './components/Loading/LoadingComponent'

const ContactPage = lazy(() => import('./pages/ContactPage'))
const HomePage = lazy(() => import('./pages/HomePage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Layout = lazy(() => import('./components/Layout'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

export default class App extends Component {
	render() {
		return (
			<Suspense fallback={<LoadingComponent />}>
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route index element={<HomePage />} />
							<Route path='about' element={<AboutPage />} />
							<Route path='portfolio' element={<Portfolio />} />
							<Route path='news' element={<NewsPage />} />
							<Route path='contact' element={<ContactPage />} />
						</Route>
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</BrowserRouter>
			</Suspense>
		)
	}
}
