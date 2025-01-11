import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Portfolio from './components/Portfolio.jsx'



const router = createBrowserRouter([{
  path: '/',
  element: <App />,
},
  {
    path: 'portfolio',
    element: <Portfolio />
  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
    
    {/* <App /> */}
  </StrictMode>
)
