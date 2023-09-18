

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Ui/Home'
import Customer from './Ui/Customer'


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/customer', element: <Customer /> }
])


const App = () => {


  return <RouterProvider router={router} />
}

export default App