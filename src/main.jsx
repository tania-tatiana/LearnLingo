import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ThemesProvider from "./components/ThemesProvider/ThemesProvider.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemesProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemesProvider>
    </BrowserRouter>
  </StrictMode>,
);
