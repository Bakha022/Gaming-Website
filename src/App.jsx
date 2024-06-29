import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import Portfolio from './pages/Portfolio'
import Layout from './components/Layout'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<HomePage />} />
            <Route path='about'  element={<AboutPage/>}/>
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='news' element={<NewsPage />} />
            <Route path='contact' element={<ContactPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
