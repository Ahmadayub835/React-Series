import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

//This is the way that we send data to our Profile file.
function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext) //In this example, we've used the useContext hook to access
    // the "user" and "setUser" variables that were defined in the provider component.

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username , password})
    }
    
  return (
    <div>
        <h2>Login</h2>
        <input type="text" name='username' 
        placeholder='Username' 
        onChange={(e) => setusername(e.target.value)}
        value={username}/>
        {/* Whenever the user types in the input field, the setusername function will be called with the updated value of the input field.*/}
        <br />
        <br />
        <input type="password" name='password' 
        placeholder='Password' 
        onChange={(e) => setpassword(e.target.value)}
        value={password}/>
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login