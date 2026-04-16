import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // Garanta que o arquivo App.jsx existe nesta pasta
import "./styles/global.css"; // Garanta que este caminho está correto

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
