import { useMemo, useState } from "react";
import TeacherCard from "../TeacherCard/TeacherCard";
import css from "./TeachersList.module.css";

export default function TeachersList({
  user,
  teachers = [],
  favorites,
  toggleFavorite,
  isFavorite,
}) {
  const [visibleCount, setVisibleCount] = useState(() => 4);

  const visibleTeachers = useMemo(() => {
    return teachers.slice(0, visibleCount);
  }, [teachers, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };
  return (
    <>
      <ul className={css.list}>
        {visibleTeachers.map((teacher) => (
          <TeacherCard
            user={user}
            key={teacher.id}
            teacher={teacher}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        ))}
      </ul>
      {teachers.length > 0 && visibleCount < teachers.length && (
        <button className={css.btnLoadMore} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </>
  );
}
