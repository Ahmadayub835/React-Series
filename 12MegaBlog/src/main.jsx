import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { AuthLayout, Login } from "./components/index.js";

import AddPost from "./pages/AddPost.jsx";
import Signup from "./pages/Signup.jsx";
import EditPost from "./pages/EditPost.jsx";

import Post from "./pages/Post.jsx";

import AllPosts from "./pages/AllPosts.jsx";

const route = createBrowserRouter([
  {
  path: "/",
  element: <App />, //we had imported app in here so the header and footer will show
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: (
        <AuthLayout authentication={false}>
          {/* we used AuthLayout for the authentication . it means that to open this component we had access on it */}
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: "/signup",
      element: (
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      ),
    },
    {
      path: "/all-posts",
      element: (
        <AuthLayout authentication>
          {""}
          {/* we used this because if we want to change the post and update it so we can do this by using authentication */}
          <AllPosts />
        </AuthLayout>
      ),
    },
    {
      path: "/add-post",
      element: (
        <AuthLayout>
            {" "}
          <AddPost />
        </AuthLayout>
      ),
    },
    {
      path: "/edit-post/:slug",
      element: (
        <AuthLayout authentication>
          {" "}
          <EditPost />
        </AuthLayout>
      ),
    },
    {
      // we used slug in both edit and show post because the post will show and deleted by using their id which is slug
      path: "/post/:slug",
      element: <Post />,
    },
  ],
}
]
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
      {/* The router prop is passed, suggesting that it uses a custom router (route) to manage navigation. */}
    </Provider>
  </React.StrictMode>
);
