import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import TeachersList from "../../components/TeachersList/TeachersList";
import { fetchTeachers } from "../../services/teacherAPI";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);

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
  return (
    <>
      <Filter />
      <TeachersList teachers={teachers} />
    </>
  );
}
