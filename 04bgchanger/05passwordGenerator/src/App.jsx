import { useCallback, useState } from 'react'

function App() {
const [length , setlength] = useState(8);
const [number, setnumber]  = useState(false);
const [char , setchar] = useState(false);

const [pass , setpass] = useState('');

const passlimit = useCallback(fn, dependencies)

  return (
    <>
    <h1 className='text-white text-center'>Password Generator</h1>
    </>
  )
}

export default App
