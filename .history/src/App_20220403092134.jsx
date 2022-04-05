import React from 'react'

import './Apps.scss'
import {Header, About, Work, Skills, Testimonials, Footer} from './containers'
import {Navbar} from './components'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App