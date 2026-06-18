import { useMemo, useState } from "react";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import css from "./FavoritesPage.module.css";

export default function FavoritePage({
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
  return (
    <div className={css.page}>
      <div className={css.cards}>
        {visibleFavorites.map((teacher) => {
          return (
            <TeacherCard
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
