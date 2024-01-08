import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate() 
  //Use navigate is used as anchor tag it transfers us from one page to another page. by using the slug
  const authStatus = useSelector((state) => state.auth.status) 
  //this functions checks the user state is true or flase (means logged in or logged out)
//THE useSelector is used to show the values and the name of the users.

  const navItems = [ //this navitems are the buttons that will be active accoriding to authStatus
    {
      name : 'Home',
      slug : '/',
      active : true
    } ,
    {
      name : 'Login',
      slug : '/login',
      active : !authStatus
    } ,
    {
      name : 'Signup',
      slug : '/signup',
      active : !authStatus
    },

    {
      name : 'All Posts',
      slug : '/all-posts',
      active : authStatus
    },
    {
      name : 'Add Post',
      slug : '/add-post',
      active : authStatus
    }
  ]


  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}> {/*this key changes the style when a button is active */}
                  <button onClick={() => navigate(item.slug)} 
                  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >
                    {item.name} {/*this name shows the name of buttons*/}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
