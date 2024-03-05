import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './styles/teriyarki-theme.css';
import './styles/flex-rules.css'
import App from './routes/App';
import ExplodingKittens from "./routes/exploding-kittens";
import GameSelection from "./routes/game-selection";

const router = createBrowserRouter([
    {
        path: "ek",
        element: <ExplodingKittens />
    },
    {
        path: "game-selection",
        element: <GameSelection />
    },
    {
        path: "/",
        element: <App />
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