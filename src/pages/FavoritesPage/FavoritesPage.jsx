import { useMemo, useState } from "react";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import css from "./FavoritesPage.module.css";
import { Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function FavoritePage({
  user,
  favorites,
  toggleFavorite,
  isFavorite,
}) {
  const [visibleCount, setVisibleCount] = useState(() => 4);

  const visibleFavorites = useMemo(() => {
    return favorites.slice(0, visibleCount);
  }, [favorites, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  if (!user) return <Navigate to="/" replace />;

  return (
    <div className={css.page}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={css.cards}>
        {visibleFavorites.map((teacher) => {
          return (
            <TeacherCard
              user={user}
              key={teacher.id}
              teacher={teacher}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          );
        })}
        {favorites.length > 0 && visibleCount < favorites.length && (
          <button className={css.btnLoadMore} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
