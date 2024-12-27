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
