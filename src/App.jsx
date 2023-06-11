import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import CryptoDetailsPage from "./Components/CryptoDetailsPage";
import ChartPage from "./Components/ChartPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/exchanges/:id" element={<CryptoDetailsPage />} />
      <Route path="/chart/:id" element={<ChartPage />} />
    </Routes>
  );
}