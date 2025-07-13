
import Navbar from './components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Feature from './components/Feature'
import Models from './components/Models'
import Services from './components/Services'
import Sign from './components/Sign'
import App from './App'



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (<>
        <App />
      </>
      )
    },
    {
      path: "/home",
      element: (<>
        <App /></>
      )
    },
    {
      path: "/models",
      element: (<><Models /></>)
    },
    {
      path: "/services",
      element: (<><Services /></>)
    },
    {
      path: "/signin",
      element: (<><Sign /></>)
    },
    {
      path: "/todo",
      element: (<><Feature /></>)
    },
    {
      path: "*",
      element: <h2>Page Not Found</h2>,
    },
  ]
);

export default router;
