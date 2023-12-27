import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navigate, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements, redirect } from 'react-router-dom'
import SignIn from './Components/SignIn.jsx'
import SignUp from './Components/SignUp.jsx'
import Layout from '../Layout.jsx'
import Profile from './Components/Profile.jsx'
import Home from './Components/Home.jsx'
import CreatePost from './Components/CreatePost.jsx'
import MyPosts from './Components/MyPosts.jsx'

const router= createBrowserRouter ([
  {
    path:'/',
    element: <Navigate to="/signin" />
  },

  {
    path:'/signin',
    element:<SignIn />
  },
  {
    path:'/signup',
    element:<SignUp />
  },
  {
    path:'/pixpulse',
    element: <Layout />,
    children :[
      {
        path:'/pixpulse/home',
        element: <Home />
      },
      {
        path:'/pixpulse/profile',
        element: <Profile />
      },
      {
        path:'/pixpulse/createpost',
        element: <CreatePost />
      },
      {
        path:'/pixpulse/myposts',
        element: <MyPosts />
      }
    ]
  }
])


// const router=  createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//     <Route path="/signin" element={<SignIn />} />
//     <Route path="/signup" element={<SignUp />} />
//     <Route path="/pixpuls" element={<Layout />}>
//       <Route path="home" element={<Home />} />
//       <Route path="profile" element={<Profile />} />
//       <Route path="createpost" element={<CreatePost />} />
//       <Route path="myposts" element={<MyPosts />} />
//     </Route>
//     <Route path="*" element={<Navigate to="/signin" />} />
//   </Routes>
//   )
// )





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router= {router} />
  </React.StrictMode>,
)
