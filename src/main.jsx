import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import Navigation from "./navigation/Navigation";
import { store } from "./store/store";
import { Provider } from "react-redux";
import NavBar from "./components/navbar/NavBar";

// https://brik-production.up.railway.app/
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <NavBar></NavBar>
        {/* <App /> */}
        <Navigation />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
