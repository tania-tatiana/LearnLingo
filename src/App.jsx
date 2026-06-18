import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import TeachersPage from "./pages/TeachersPage/TeachersPage";
import FavoritePage from "./pages/FavoritesPage/FavoritesPage";
import { useCallback, useEffect, useState } from "react";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
// import { useEffect } from "react";
// import { importTeachers } from "./utils/importTeachers";
// import { fetchTeachers } from "./services/teacherAPI";

function App() {
  const [isRegisterOrLoginOpen, setIsRegisterOrLoginOpen] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  // useEffect(() => {
  //   async function init() {
  //     const teachers = await fetchTeachers();
  //     if (teachers.length === 0) {
  //       await importTeachers();
  //     }
  //   }

  //   init();
  // }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsRegisterOrLoginOpen(null);
    }, 300);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isRegisterOrLoginOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleClose, isRegisterOrLoginOpen]);

  useEffect(() => {
    if (isRegisterOrLoginOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isRegisterOrLoginOpen]);

  return (
    <>
      <AppBar
        isRegisterOrLoginOpen={isRegisterOrLoginOpen}
        setIsRegisterOrLoginOpen={setIsRegisterOrLoginOpen}
        isClosing={isClosing}
        setIsClosing={setIsClosing}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <FavoritePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Login
        isClosing={isClosing}
        isRegisterOrLoginOpen={isRegisterOrLoginOpen}
        onClose={handleClose}
      />
      <Registration
        isClosing={isClosing}
        isRegisterOrLoginOpen={isRegisterOrLoginOpen}
        onClose={handleClose}
      />
    </>
  );
}

export default App;
