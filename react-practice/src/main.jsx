import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DebounceGun from "./pages/DebounceGun.jsx";
import HomePage from "./pages/HomePage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element:  <DebounceGun />,
  },
  {
    path: "/gun",
    element: <DebounceGun />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="root-page">
    <nav
      style={{
        height: "40px",
        background: "khaki",
        display: "flex",
        padding: "10px",
        alignItems:'center',
        fontWeight:'bolder'
      }}
    >
    <a href="https://aat.netlify.app">  Ashutosh Anand tiwari ( visit profile)</a>
    </nav>
    <RouterProvider router={router} />
  </div>
);
