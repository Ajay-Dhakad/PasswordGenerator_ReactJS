import { useState,useCallback,useEffect, useRef } from 'react'

import './App.css'

function App() {

  const [length,setlength] = useState(8)
  const [numbers,setnumbers] = useState(false)
  const [character,setcharacter] = useState(false)
  const [password,setpassword] = useState('')
  const refelem = useRef(null)


  const generatepass = useCallback(() => {

    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQTUVWXYZabcdefghijklmnopqstuvwxyz'
    let num = '12345123456789067890'
    let char = '{}":>?<><!@#$%^&*(),./<!@#$%^&*(),./;'
    let index = 0
    
    if (numbers){str += num}
    if (character){str += char}

    for (let i = 0; i < length; i++) {

       index = Math.floor(Math.random()*str.length)
      pass += str.charAt(index)

     

      
    }

    setpassword(pass)

  },[length,numbers,character,setpassword])

  useEffect(generatepass,[length,numbers,character,setpassword])
  




  return ( 
    <>
     <div className="main">


<div className="card">
  <h1 id='head'>Password Generator</h1>

  <div className="passfield">
  <input id='passfield' value={password} type="text" ref={refelem} readOnly/>
  <button  onClick={() =>{

refelem.current.select()
window.navigator.clipboard.writeText(password)
 


  }} className="copy">Copy</button>
  </div>
  
  <div className="length">
    <input type="range" value={length} onChange={(e) =>{setlength(e.target.value)}}  min={8} max={32} name="" id="range" />
    <p>length({length})</p>
    </div>

  
    <div className="checkbox">
      <h2>Numbers</h2><input type="checkbox"  onChange={() => {setnumbers((prev) => !prev )}}  defaultChecked={numbers} name="" id="num" />
      <h2>Character</h2><input  type="checkbox"  onChange={() => {setcharacter((prev) => !prev )}} name="" id="num" />
    </div>

   <p className="tip"><span>Tip : </span>Use Numbers & Characters For Secure Passwords</p>

</div>

     </div>
     </>
  )

  }


export default App
