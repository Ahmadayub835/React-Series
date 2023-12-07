import React from "react"
import UserContextProvider from "./Context/UserContextProvider"
import Login from "./Components/Login"
import Profile from "./Components/Profile"

function App() {
  return (
    <UserContextProvider>
      <h1>This is the rendered</h1>
    <Login />
    <Profile />
  </UserContextProvider>
  )
}

export default App
