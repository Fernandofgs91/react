import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from 'react-router-dom';  // ← Adicione esta linha
import App from "./App.jsx";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
 
