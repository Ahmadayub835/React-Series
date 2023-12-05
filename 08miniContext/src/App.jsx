import React from "react"
import UserContextProvider from "./Context/UserContextProvider"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import Login2 from "./Components/Login2"

function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profile />
      <Login2 />
    </UserContextProvider>
  )
}

export default App
