import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Github from './components/Github/Github.jsx'
import Contact from './components/Contact/Contact.jsx'
import Login from './components/Login/Login.jsx'
import User from './components/Userid/User.jsx'

//This functions creates and gets router path.
const myrouter = createBrowserRouter([ {/*This method cretes router in React.*/},
{     /*{/*This is the main element from which we can get all the children components from layout.}*/
  path : '',
  element : <Layout />,
  children:[
    {
      path : '/',              /*{/*This is the path from where we get html}*/
      element : <Home />
    },
    {
      path : '/about',
      element : <About />
    },
    {
      path : '/github',
      element : <Github />
    },
    {
      path: 'contact',
      element : <Contact />
    },
    {
      path : 'Login',
      element : <Login />
    },
    {
      path: 'user/:userid',
      element : <User />
    },
  ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myrouter} />  {/*This is used for router rendering*/}
  </React.StrictMode>,
)
