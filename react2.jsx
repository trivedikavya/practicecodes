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
