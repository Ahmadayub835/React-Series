import React, {useState } from 'react'

function Login2() {
const [text , settext] = useState('')

  const hellosubmit = (e) => {
    e.preventDefault()
    settext({text})
  }

  
  return (
    <div>
      <input type="text" 
      onChange={(e) => settext(e.target.value)} 
      value={text} />

      <div>The value is {text}</div>
    </div>
  )
}

export default Login2