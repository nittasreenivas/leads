import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/js/bootstrap"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LeadSearch from './components/LeadSearch';
import Home from './components/Home';
import LeadEntry from './components/LeadEntry';
import ShowLead from './components/ShowLead';
import Register from './features/User/Register';
import Login from './features/User/Login';
import EditLead from './components/EditLead';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<LeadSearch></LeadSearch>
      },
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/addLead',
        element:<LeadEntry></LeadEntry>
      },
      {
        path:'/showLead',
        element:<ShowLead></ShowLead>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/editLead',
        element:<EditLead></EditLead>
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
