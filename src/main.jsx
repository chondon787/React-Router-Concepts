import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Home/Users.jsx';
import UserDatails from './components/UserDatails/UserDatails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    
    children: [
      {
        path: "/Users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
          path: "/About",
          element: <About></About>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/user/:userId",
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDatails></UserDatails>,
      },

    {
      path: "/Posts",
      loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <Posts></Posts>,
    },
{
  path: "/post/:postId",
  loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
  element: <PostDetails></PostDetails>,
}

    ]
  },
  
   
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
