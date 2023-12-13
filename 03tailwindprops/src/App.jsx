import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  // const [count, setCount] = useState(0);

  let myprop = {
    Name: "Ahmad Ayub",
    age: 21,
  };

  let newarr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-lg">Tailwind Test</h1>
      <br />
      <button className="p-2 border-none bg-grey-600 mt-3 hover:bg-green-400 border-black">
        Click me
      </button>

      <Card username="Ahmad Ayub" btnText="Click me" />
      {/*we can add it manually this is first method.*/}
      <br />
      <Card username="Bhutta" myarr={newarr} />
    </>
  );
}

export default App;
