import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Jokenpo from "./components/jokenpo/Jokenpo.jsx";
import TicTacToe from "./components/tictactoe/TicTacToe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/jokenpo",
    element: <Jokenpo />,
  },
  {
    path: "/tictactoe",
    element: <TicTacToe />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
