import { useState } from 'react'

function App() {
  const [color, setColor] = useState("")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

         <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-2 py-2 rounded-xl'>
            <button onClick={()=>setColor("red")} className='px-2 py-1' style={{backgroundColor:"red",color:'black',borderRadius:"10px" }}>Red</button>
            <button onClick={()=>setColor("green")} className='px-2 py-1' style={{backgroundColor:"green",color:'black',borderRadius:"10px" }}>Green</button>
            <button onClick={()=>setColor("yellow")} className='px-2 py-1' style={{backgroundColor:"yellow",color:'black',borderRadius:"10px" }}>Yello</button>
            <button onClick={()=>setColor("pink")} className='px-2 py-1' style={{backgroundColor:"pink",color:'black',borderRadius:"10px" }}>Pink</button>
            <button onClick={()=>setColor("orange")} className='px-2 py-1' style={{backgroundColor:"orange",color:'black',borderRadius:"10px" }}>orange</button>
         </div>
      </div>
    </div>
  )
}

export default App
