import React from 'react'

import {Header, About, Work, Skills, Testimonials, Footer} from './containers'
import {Navbar} from './components'

const App = () => {
  return (
    <div className="App">
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