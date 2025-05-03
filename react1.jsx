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
//1st Form handling che a 

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

// incre and decree wado 
import { useState } from 'react'

const App = () => {
 
const [a, setA] = useState(0)


  return (
    <div>
      <h1> leo {a} </h1>
      <button onClick={()=>{setA(a+10)} }> incree </button>
      <button onClick={()=>{setA(a-10)}}> decree </button>
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

// Next hai bhai 
// props 
//app
import React from 'react'
import Card from './components/Card'
const App = () => {
  const user = "leo"
  const val = 10
  
  return (
    <div>
      <Card a={user} b={val} c ='100'/>
      <Card a='Kavya legend '  />
    </div>
  )
}

export default App
//components--Card.jsx
import React from 'react'

const Card = (props) => {
    // ahiy bract ma atle variable ma value ayi exact value to use dot props
  return (
<div>
    <div className='text-2xl'> User name is {props.a} </div>
    <div className='text-2xl'> User name is {props.b} </div>
    <div className='text-2xl'> User name is {props.c} </div>
    </div>
    
  )
}

export default Card



// 21/03/25 Card data direact 
//App jsx
import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div>
     <div className="p-10">
      <Card name="Kavya" company="Google" profes="CEO"/>
     </div>
    </div>
  )
}

export default App

// Card jsx 
import React from 'react'

const Card = (data) => {
  return (
    <div className="bg-white text-black rounded-lg p-6 shadow-lg inline-block text-center">
      
          <h1>Heyy I am {data.name}</h1>
          <h1>I work at {data.company}</h1>
          <h1>AS {data.profes}</h1>
      
    </div>
  )
}

export default Card
// Json formate Ma data kayi rite mokalso
//app jsx 
import React from 'react'
import Card from './components/Card'
const App = () => {

  const data =[
    {
      "name": "Alice Johnson",
      "company": "Tech Innovators Ltd.",
      "profession": "Software Engineer"
    },
    {
      "name": "Rajesh Kumar",
      "company": "Green Energy Corp.",
      "profession": "Environmental Consultant"
    },
    {
      "name": "Sophie Martin",
      "company": "Creative Designs Inc.",
      "profession": "Graphic Designer"
    },
    {
      "name": "Daniel Lee",
      "company": "FinTech Solutions",
      "profession": "Data Analyst"
    },
    {
      "name": "Elena Rodriguez",
      "company": "Healthcare Plus",
      "profession": "Medical Researcher"
    }
  ]
  

  return (
    <div>
     <div className="p-10">
      { data.map((item, index) => {
          return <Card key={index} name={item.name} company={item.company} profession={item.profession}/>
      })
      }
    
     </div>
    </div>
  )
}

export default App
//card jsx 
import React from 'react'

const Card = (data) => {
  return (
    <div className="bg-white mr-1 text-black rounded-lg p-6 shadow-lg inline-block text-center">
      {/* if photo bi json data ma leo hoye toh (src={data.photo})  */}
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="w-32 h-32 rounded-full mx-auto mb-6"/>

      
          <h1>Heyy I am {data.name}</h1>
          <h1>I work at {data.company}</h1>
          <h1>AS  <span className='text-blue-800' > {data.profession} </span>  </h1>
      
    </div>
  )
}

export default Card

// Api Axios thi Api 22-03-25 onclick data print thaye 
import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () =>{
   const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')  // api hai ye
   const data = response.data
    setData(data)
    console.log(data)
  }



  return (
    <div className='p-10'>
      {/* a button che  */}
      <button className='bg-red-400 text-white font-bold rounded p-3 active:scale-50' onClick={getData}>Get Data</button>

      {/* a div che jema data print thay che */}

      <div className='p-5 bg-slate-800 m-5'> 

    {data.map(function(e,idx)  {
      return <div key={idx} className='bg-slate-950 text-white text-center justify-between flex p-5 m-5 items-center rounded'>
        <img src={e.download_url} alt="Avatar" className="w-32 h-32 rounded-full mx-auto mb-6"/>
        <h1>{e.id} maken by {e.author}</h1>
        
      </div>
        
    }
    )}
      </div>
    </div>
  )
}

export default App

// Direact data no Button so use useeffect for that 
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () =>{
   const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')  // api hai ye
   const data = response.data
    setData(data)
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])
  


  return (
    <div className='p-10'>
      {/* a button che  */}
     
      {/* a div che jema data print thay che */}

      <div className='p-5 bg-slate-800 m-5'> 

    {data.map(function(e,idx)  {
      return <div key={idx} className='bg-slate-950 text-white text-center justify-between flex p-5 m-5 items-center rounded'>
        <img src={e.download_url} alt="Avatar" className="w-32 h-32 rounded-full mx-auto mb-6"/>
        <h1>{e.id} maken by {e.author}</h1>

      </div>
        
    }
    )}
      </div>
    </div>
  )
}

export default App


//router dom concept redirect thinsg browser import karavu router dom wrap mainjsx ma app ne   routes , route path , element , link 
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
      <Head />   ano code basic nav bar jevo but used links so it will not usefull because it reloads 
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

rather than that  <Link to="/" className='text-blue-600 text-xl underline-offset-1'>Home</Link> line we can use anchor tag and in href put the path but it reloads so no moto of react 

import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <div>
        <nav className='nav py-4 px-4 bg-gray-800 text-white flex justify-between'>
            
            <Link to="/" className='text-blue-600 text-xl underline-offset-1'>Home</Link>
            <Link to="/Leo" className='text-blue-600 text-xl underline-offset-1'>Contact</Link>
            <Link to="/about" className='text-blue-600 text-xl underline-offset-1'>about</Link>
            
            
            
       
        </nav>
    </div>
  )
}

export default Head

