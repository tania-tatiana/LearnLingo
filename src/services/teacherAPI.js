import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function fetchTeachers() {
    const querySnapshot = await getDocs(collection(db, "teachers"));
    const teachers = await querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return teachers;
}