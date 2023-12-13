import { useState } from "react";

function App() {
  const [color,setColor] = useState('')
  
  return (
    <>
      <div className="w-full h-screen m-0 p-0" style={{backgroundColor: color}}>
        <div className="bg-white flex flex-wrap justify-center rounded-xl shadow-2xl inset-0 gap-4">
          <button
            className="px-3 py-2 rounded-lg shadow-lg"
            style={{ backgroundColor: "red" }} onClick={() => setColor('red')}>
            Red
          </button>
          <button
            className="px-3 py-2 rounded-lg shadow-lg"
            style={{ backgroundColor: "blue" }} onClick={() => setColor('blue')}>
            Blue
          </button>
          <button
            className="px-3 py-2 rounded-lg shadow-lg"
            style={{ backgroundColor: "orange" }} onClick={() => setColor('orange')}>
            Orange
          </button>
          <button
            className="px-3 py-2 rounded-lg shadow-lg"
            style={{ backgroundColor: "green" }} onClick={() => setColor('green')}>
            Green
          </button>
          <button
            className="px-3 py-2 rounded-lg shadow-lg"
            style={{ backgroundColor: "gray" }} onClick={() => setColor('gray')}>
            Gray
          </button>
          <button
            className="px-3 py-2 rounded-lg shadow-lg"
            style={{ backgroundColor: "olive" }} onClick={() => setColor('olive')}>
            Olive
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
