import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ThemesProvider from "./components/ThemesProvider/ThemesProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemesProvider>
        <App />
      </ThemesProvider>
    </BrowserRouter>
  </StrictMode>,
);
