import { useState ,useCallback,useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")
 
  // useRef hook 
  const passwordRef=useRef(null)

  let passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str+="1234567890";   
    if (charAllowed)  str+="~`!@#$%^&*(){}[]':;";

    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char);
    }
     setPassword(pass);
  },
    [length,numberAllowed,charAllowed,setPassword])

    const copyPassword=useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.navigator.clipboard.setSelectionRange(0,100);
      window.navigator.clipboard.writeText(password)

    },[password])

   useEffect(()=>{
    passwordGenerator();
   },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
    
    <div className='mainDiv shadow-2xl px-2 py-4'>
    <h1 className='text-xl text-center'>Password generator</h1>
    <div>
    <input
    className='input px-2 py-2 rounded-xl'
    type='text'
    value={password}
    placeholder='password'
    readOnly
    ref={passwordRef}
    ></input>
    <button
    onClick={copyPassword}
     className='copyBtn'>Copy</button>
    </div>
   <div className='checedInput flex flex-wrap justify-center gap-5 mt-4
    ' >
     <div>
      <input
      type='range'
      min={6}
      max={100}
      defaultValue={length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
      ></input>
      <label>Lenght:{length}</label>
    </div>
    <div>
      <input
      type='checkbox'
      defaultChecked={numberAllowed}
      id='numberInput'
      onChange={()=>{setNumberAllowed((prev)=>!prev)}}
      ></input>
      <label>Numbers</label>
    </div>
    <div>
      <input
      type='checkbox'
      defaultValue={charAllowed}
      id='charInput'
      onChange={()=>{setcharAllowed((prev)=>!prev)}}
      ></input>
      <label>Characters</label>
    </div>
   </div>
     
    </div>
    </>
  )
}

export default App
