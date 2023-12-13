import { useState } from "react";
import "./App.css";

function App() {
  //let counter = 10; //(This is the official javascript.)

  const [counter, addcounter] = useState(10);

  const [firstpara , secondpara] = useState('')
  /*In this we used first parameter to
 store the value that store our output results  and 
 2nd parameter the function which processes data.*/

 const typevalue = (e) =>{
      const valuewritten = e.target.value
      secondpara(valuewritten)
    }
    
  const addedValue = () => {
    if (counter < 20) {
      addcounter(counter + 1);
    }
    return;
  };
  /*basically we made the function on addounter () in brackets we define wahta to
  do with output*/

  const removeValue = () => {
    if (counter > 0) {
      addcounter(counter - 1);
    }
    return;
  };

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter in React {counter} </h2>

      <button onClick={addedValue}>Add value {counter} </button>
      <br />
      <br />
      <h2>value of input:{firstpara}</h2>
      
      <input type="text" placeholder="Type something.." onChange={typevalue} 
      value={firstpara}/>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
