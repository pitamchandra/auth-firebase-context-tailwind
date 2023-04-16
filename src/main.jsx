import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import AuthProvider from './providers/AuthProvider'
import Private from './private/Private'
import Orders from './components/Orders'
import Profile from './components/Profile'


const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path : '/orders',
        element : <Private><Orders></Orders></Private>
      },
      {
        path : '/profile',
        element : <Private><Profile></Profile></Private>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
