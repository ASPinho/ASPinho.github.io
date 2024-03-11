import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './styles/teriyarki-theme.css';
import './styles/flex-rules.css'
import HomePage from './routes/home-page';
import ExplodingKittens from "./routes/exploding-kittens";
import GameSelection from "./routes/game-selection";

const router = createBrowserRouter([
    {
        path: "game-picker/ek",
        element: <ExplodingKittens />
    },
    {
        path: "game-picker",
        element: <GameSelection />
    },
    {
        path: "/",
        element: <HomePage />
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