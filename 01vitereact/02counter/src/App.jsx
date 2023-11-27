import { useState } from 'react'
import './App.css'



function App() {
//let counter = 10; //(This is the official javascript.)

const [counter ,addcounter] = useState(10);
 /*In this we used first parameter to
 store the value that store our output results  and 
 2nd parameter is used to define what we want to do with useState hook.*/

const  addedValue = () =>{
  if(counter < 20){
    addcounter(counter + 1)
  } return
};
 /*basically we made the function on addounter () in brackets we define wahta to
  do with output*/

const removeValue = () =>{
  if (counter > 0) {    
    addcounter(counter - 1)
  } return
};
  


  return (
    <>
    <h1>Chai or React</h1>
    <h2>Counter in React {counter} </h2>

    <button onClick={addedValue}>Add value {counter} </button>
    <br />
    <br />
    <button onClick={removeValue}>Remove value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
};

export default App;
