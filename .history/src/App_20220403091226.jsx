import React from 'react'

import {Header, About, Work, Skills, Testimonials, Footer} from './containers'

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