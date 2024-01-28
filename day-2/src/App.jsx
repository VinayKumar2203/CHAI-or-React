import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ManyTimes() {
  const [count, setCount] = useState(0)

  let handleIncrease=()=>{
   setCount((preCount)=>preCount+1)
   setCount((preCount)=>preCount+1)
   setCount((preCount)=>preCount+1)
  }
  let handleDecrease=()=>{
   setCount(count-1)
  }

  return (
    <>

     <h1>button is click {count} times</h1>
     <p>you want to click button is one time but increase many times</p>
     <button onClick={handleIncrease} disabled={count>=20}>IncreaseCount</button>
     <button onClick={handleDecrease} disabled={count<=0}>DecreaseCount</button>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  let handleIncrease=()=>{
   setCount(count+1)
  }
  let handleDecrease=()=>{
   setCount(count-1)
  }

  return (
    <>
     <h1>button is click {count} times</h1>
     <button onClick={handleIncrease} disabled={count>=20}>IncreaseCount</button>
     <button onClick={handleDecrease} disabled={count<0}>DecreaseCount</button>
    <ManyTimes />
    </>
  )
}

export default App
