import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  
  //let counter = 5;

  const addValue = () => {
    //counter += 1;
    setCounter(counter + 1)
  }

  const reduceValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Hello React!</h1>
      <h2>Counter: {counter}</h2>

      <button onClick = {addValue}>Increase Value</button>
      <br />
      <button onClick = {reduceValue}>Decrease Value</button>
    </>
  )
}

export default App
