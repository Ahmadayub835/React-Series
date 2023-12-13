import React, { useCallback, useEffect, useRef, useState } from "react";
//1.useCallback is the hook that is used to call the function in a function.
//2.useEffect  is a React Hook that lets you synchronize a component with an external system.
//3.useRef is a react hook that is used when we want to get reference of any element.

function App() {
  //we here discuss length , number and charcter. The useState hook is used to show value on ui.
  const [length, setLength] = useState(8);  //this state sets the length of the value. this lenght is used on for loop also.
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState(""); //this is the pasword that will be showed on input field we officaly set it to none and we wnat to make the officaial password.

  //useCallback hook:-
  const passGenerator = useCallback(() => {
    let generatedPass = ""; //this var stores the generated password thatis  stored in input field.
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()_+-={}[]|:;";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length); //Math.random is used to generate random numbers and str.lenght and Math.floor always rounds down and returns the largest integer less than or equal to a given number.
      generatedPass += str.charAt(char); //When this loop ends the generated pass stores the value in strlenght char.
    }
    setPass(generatedPass);
  }, [length, number, char, setPass]);

  // UseRef hook:-
  const passRef = useRef(null);
  
  //useCallback hook:-
  const CopyPasswordToClipboard = useCallback(() => {
    passRef.current?.select("");
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  //useEffect hook:-
   useEffect(() => {
     passGenerator();
   }, [length, number, char, passGenerator]); 
  return (
    <>
      <h1 className="text-white text-center justify-center">Password Generator</h1>
      <div className="py-10 bg-slate-400 rounded-xl text-center w-full max-w-md">
        Password
        <div className="">
          <input
            type="text"
            className="outline-none py-1 px-2 "
            placeholder="password"
            value={pass}
            ref={passRef}/>
          <button
            className="bg-blue-500 text-white px-2 py-1"
            onClick={CopyPasswordToClipboard}>
            copy
          </button>
          <div className="flex justify-center gap-5 text-center">
            <div>
              <input
                type="range"
                className="cursor-pointer"
                min={7}
                max={100}
                value={length}
                onChange={(event) => setLength(event.target.value)}
              />
              <label>Length: {length}</label>
            </div>

            <div>
              <input
                type="checkbox"
                className="cursor-pointer"
                defaultChecked={number}
                onChange={() => setNumber((prevValue) => !prevValue)}
              />
              <label>Numbers</label>
            </div>

            <div>
              <input
                type="checkbox"
                className="cursor-pointer"
                defaultChecked={char}
                onChange={() => setChar((prevValue) => !prevValue)}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
