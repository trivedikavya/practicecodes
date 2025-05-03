import React from 'react'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contect'
import Head from './components/Head'

const App = () => {
  return (
    <div>
      <div>
      <Head />
      </div>
      
      {/* like this we use router Dom in which routes name nu container wrap all route in it  */}
      <Routes> 
        {/* active state ma kayu page reahse means inital jyare user avse toh kayu page */}
        <Route path="/"  element={<Home/>}/>
        
        {/* aaj container ma tamare badha page na routes atle link change toh kayo make like that   */}
        <Route path="/about" element={<About />} />
        <Route  path="/Leo" element={<Contact />}/>
        {/* like that continue if you want to  */}
      </Routes>
    </div>
  )
}

export default App