import React from 'react'

const Head = () => {
  return (
    <div>
        <nav className='nav py-4 px-4 bg-gray-800 text-white flex justify-between'>
            
            <a href="/" className='text-blue-600 text-xl underline-offset-1  '>Home</a>
            <a href="/Leo"className='text-blue-600 text-xl underline-offset-1' >Contact</a>
            <a href="/about"className='text-blue-600 text-xl underline-offset-1' >About</a>
            
       
        </nav>
    </div>
  )
}

export default Head