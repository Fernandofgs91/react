import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // Garanta que o arquivo App.jsx existe nesta pasta
import "./styles/global.css"; // Garanta que este caminho está correto
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename="/react">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
