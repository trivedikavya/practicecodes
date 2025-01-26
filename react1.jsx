import { useState } from 'react'

const App = () => {
const [a, setA] = useState(6)
const changeA = () => {
  setA(9)
}

  return (
    <div>
      <h1> leo {a} </h1>
      <button onClick={changeA}> click </button>
    </div>
  )
}

export default App
// Form handling che a 

import React from 'react'

const App = () => {


  const submiit = (e) => {
    e.preventDefault()
    console.log("submited bhai ",e)
    // only this so not heppen default  reload 
  }

  return (
    

    <div>
      <form className='' onSubmit={(e) => {
        submiit(e)
        // e is event
      }}>

        <input type="text" className='m-8 text-black border-black px-5 py-6 rounded' placeholder='LAKHO GABA'/>
        <button className=' px-3 py-7 text-xl text-white bg-red-300 rounded m-7 Border-black border-solid' >SUBMIT</button>
      </form>
    </div>



  )
}

export default App


// 2 way binding 

import React, { useState } from 'react'

const App = () => {


const [username, setusername] = useState('')

const sub = (e) => {
  // prevent reload
  e.preventDefault()
  // name lidhu batava 
console.log(username)
// inital pachu set karva
setusername('')
}



  return (
    

    <div>

      <form className='' onSubmit={(e) => {
        sub(e)
      }}>

        <input 
        // initaly value
        value={username} 
        onChange={(e) => {
          setusername(e.target.value)
        }}
        type="text" 
        className='m-8 text-black border-black px-5 py-6 rounded' 
        placeholder='LAKHO GABA'/>
        <button className=' px-3 py-7 text-xl text-white bg-red-300 rounded m-7 Border-black border-solid' >SUBMIT</button>
      </form>

    </div>



  )
}

export default App



// COMPONENTS  like (APP) includes just name nav and header the file are craeted somewhere in folder name components  nav and header 
//app.jsx
import React from 'react'
import Header from './components/Header' // capitail must be file name capitalise 
import Nav from './components/Nav' // a line mate just right once (click enter) line aya pachi self closing tag 
const App = () => {
  return (
   <>
   
    <Nav></Nav>
    
   </>
  )
}

export default App
// in components folder Nav.jsx

import React from 'react'
import Header from './Header'

const Nav = () => {
  return (
    <div>
        <nav className='bg-black flex iteams-center justify-between p-3 m 5'> 
      <h2 className='text-2xl text-white'>WEB-Gs </h2>
      <div className='flex gap-8 text-white'>
        <h4 className='text-xl'>about</h4>
        <h4 className='text-xl'>contact</h4>
        <h4 className='text-xl'>services</h4>
        <h4 className='text-xl'>your account</h4>
      </div>
    </nav>
    <div>
        <Header />
    </div>
    </div>
  )
}

export default Nav
// in components folder Header.jsx
import React from 'react'

const Header = () => {
  return (
    <div>I am the header baby </div>
  )
}

export default Header
