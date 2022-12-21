import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import MainPage from "../pages/main-page/MainPage";
import AdminPage from "../pages/admin-page/AdminPage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default Navigation;
