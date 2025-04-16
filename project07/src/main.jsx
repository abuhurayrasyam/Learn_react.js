import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './assets/components/Root/Root.jsx';
import Home from './assets/components/Home/Home.jsx';
import Mobiles from './assets/components/Mobiles/Mobiles.jsx';
import Laptops from './assets/components/Laptops/Laptops.jsx';
import Users from './assets/components/Users/Users.jsx';
import Users0 from './assets/components/Users0/Users0.jsx';
import UserDetails from './assets/components/UserDetails/UserDetails.jsx';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {
        path: 'users', 
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users0',
        element: <Suspense fallback={<span>Loading....</span>}>
          <Users0 usersPromise={usersPromise}></Users0>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      }
    ]
  },
  {
    path: 'app01',
    element: <App></App>
  },
  {
    path: 'app02',
    Component: App
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
