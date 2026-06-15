import { useEffect, useMemo, useState } from "react";
import Filter from "../../components/Filter/Filter";
import TeachersList from "../../components/TeachersList/TeachersList";
import { fetchTeachers } from "../../services/teacherAPI";
import css from "./TeachersPage.module.css";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [filters, setFilters] = useState({
    language: "All",
    level: "All",
    price: "All",
  });

  useEffect(() => {
    async function loadTeachers() {
      try {
        const data = await fetchTeachers();
        setTeachers(data);
      } catch (error) {
        console.error("Error fetching error:", error);
      }
    }
    loadTeachers();
  }, []);

  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const matchLanguage =
        filters.language === "All" ||
        teacher.languages.includes(filters.language);

      const matchLevel =
        filters.level === "All" || teacher.levels.includes(filters.level);

      const matchPrice =
        filters.price === "All" ||
        teacher.price_per_hour <= Number(filters.price);

      return matchLanguage && matchLevel && matchPrice;
    });
  }, [teachers, filters]);
  return (
    <div className={css.page}>
      <Filter filters={filters} setFilters={setFilters} />
      <TeachersList teachers={filteredTeachers} />
    </div>
  );
}
