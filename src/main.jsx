import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.scss";
import Navigation from "./navigation/Navigation";
// https://brik-production.up.railway.app/
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <App /> */}
      <Navigation />
    </React.StrictMode>
  </BrowserRouter>
);
