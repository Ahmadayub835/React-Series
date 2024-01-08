import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './Components/Addtodo'
import Todos from './Components/Todos'

function App() {

  return (
    <>
    <h1 className='text-4xl font-bold'>React Redux Toolkit</h1>
    <Addtodo />
    <Todos />
    </>
  )
}

export default App
