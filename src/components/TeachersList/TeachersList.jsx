import TeacherCard from "../TeacherCard/TeacherCard";
import css from "./TeachersList.module.css";

export default function TeachersList({ teachers }) {
  return (
    <ul className={css.list}>
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </ul>
  );
}
