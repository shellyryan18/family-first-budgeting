import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import IntakeForm from "./IntakeForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/intake" element={<IntakeForm />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);