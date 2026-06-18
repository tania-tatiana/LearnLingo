import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import TeachersPage from "./pages/TeachersPage/TeachersPage";
import FavoritePage from "./pages/FavoritesPage/FavoritesPage";
import { useCallback, useContext, useEffect, useState } from "react";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthContext } from "./components/AuthContext/AuthContext";
// import { useEffect } from "react";
// import { importTeachers } from "./utils/importTeachers";
// import { fetchTeachers } from "./services/teacherAPI";

function App() {
  const [isRegisterOrLoginOpen, setIsRegisterOrLoginOpen] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const { user } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (teacher) => {
    setFavorites((prev) => {
      const isExist = prev.some((item) => item.id === teacher.id);

      if (isExist) {
        return prev.filter((item) => item.id !== teacher.id);
      } else {
        return [...prev, teacher];
      }
    });
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };
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
        <Route
          path="/teachers"
          element={
            <TeachersPage
              user={user}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <FavoritePage
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
              />
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
