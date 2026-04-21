import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.jsx";
import IntakeForm from "./IntakeForm.jsx";
import Payment from "./Payment.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/intake" element={<IntakeForm />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Analytics />
    </HashRouter>
  </React.StrictMode>
);