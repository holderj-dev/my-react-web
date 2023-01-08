import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Projects } from './routes/projects';
import { Contacts } from './routes/contacts';
import { Blogs } from './routes/Blog';
import Account from './routes/accountPage';
import { AuthContextProvider } from './context/AuthContext';





const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contacts",
    element: <Contacts />
  },
  {
    path: "/blog",
    element: <Blogs />
  },
  {
    path: "/account",
    element: <Account />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();