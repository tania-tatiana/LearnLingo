import { useEffect, useMemo, useState } from "react";
import Filter from "../../components/Filter/Filter";
import TeachersList from "../../components/TeachersList/TeachersList";
import { fetchTeachers } from "../../services/teacherAPI";
import css from "./TeachersPage.module.css";

export default function TeachersPage({
  user,
  favorites,
  toggleFavorite,
  isFavorite,
}) {
  const [teachers, setTeachers] = useState([]);
  const [filters, setFilters] = useState({
    language: null,
    level: null,
    price: null,
  });

  useEffect(() => {
    async function loadTeachers() {
      try {
        const data = await fetchTeachers();
        setTeachers(data);
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error(error);
        }
      }
    }
    loadTeachers();
  }, []);

  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const matchLanguage =
        !filters.language || teacher.languages.includes(filters.language);

      const matchLevel =
        !filters.level || teacher.levels.includes(filters.level);

      const matchPrice =
        !filters.price || teacher.price_per_hour <= Number(filters.price);

      return matchLanguage && matchLevel && matchPrice;
    });
  }, [teachers, filters]);
  return (
    <div className={css.page}>
      <Filter filters={filters} setFilters={setFilters} />
      <TeachersList
        user={user}
        teachers={filteredTeachers}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
}
