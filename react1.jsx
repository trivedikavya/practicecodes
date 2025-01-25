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
