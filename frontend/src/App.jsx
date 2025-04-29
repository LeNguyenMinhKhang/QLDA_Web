import './App.css'
import Home from './components/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Signup',
    element: <Signup />,
  },

])
function App() {

  return (
    <div>

      <RouterProvider router={appRoutes} />
    </div>
  )
}

export default App
