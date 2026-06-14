import { useState } from "react";
import TeacherCard from "../TeacherCard/TeacherCard";
import css from "./TeachersList.module.css";

export default function TeachersList({ teachers }) {
  const [visibleCount, setVisibleCount] = useState(4);

  const visibleTeachers = teachers.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };
  return (
    <>
      <ul className={css.list}>
        {visibleTeachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </ul>
      {visibleCount < teachers.length && (
        <button className={css.btnLoadMore} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </>
  );
}
