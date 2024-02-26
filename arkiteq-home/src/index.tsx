import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './styles/teriyarki-theme.css';
import './styles/flex-rules.css'
import App from './App';
import ExplodingKittens from "./routes/exploding-kittens";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "EK",
        element: <ExplodingKittens />
    }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);