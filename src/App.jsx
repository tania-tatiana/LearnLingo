import { Route, Routes, useLocation } from "react-router-dom";
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
import toast, { Toaster } from "react-hot-toast";
// import { useEffect } from "react";
// import { importTeachers } from "./utils/importTeachers";
// import { fetchTeachers } from "./services/teacherAPI";

function App() {
  const [isRegisterOrLoginOpen, setIsRegisterOrLoginOpen] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }

    const stored = localStorage.getItem(`favorites_${user.uid}`);
    setFavorites(stored ? JSON.parse(stored) : []);
  }, [user]);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem(`favorites_${user.uid}`, JSON.stringify(favorites));
  }, [favorites, user]);

  useEffect(() => {
    if (location.state?.fromProtected) {
      toast.error("Please log in or register!", {
        position: "top-center",
        id: "auth-error",
      });
    }
  }, [location.state]);

  const toggleFavorite = (teacher) => {
    if (!user) return;

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
    if (!user) return false;
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
      <Toaster position="top-right" reverseOrder={false} />
      <AppBar
        user={user}
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
        <Route element={<ProtectedRoute />}>
          <Route
            path="/favorites"
            element={
              <FavoritePage
                user={user}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
              />
            }
          />
        </Route>

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
