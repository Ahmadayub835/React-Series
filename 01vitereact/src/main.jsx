import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App';

//These are the methods for making components in react.
//The fist method makes the simple object with simple html tags:-
const reactElement = (
    <a href="https://google.com" target='_blank'>Click me to open</a>
);

//The secod tag makes the anchor with the help of the react createElement:-
const reactApp = React.createElement(
  'a',
    {href:'https://google.com' , target:'_blank'} ,
   'click on this to open google'
);

// The Render means the resctriction library by the react it is official.
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement

    // reactApp 

  // <React.StrictMode> 
  //   <App />
  // </React.StrictMode>
);
