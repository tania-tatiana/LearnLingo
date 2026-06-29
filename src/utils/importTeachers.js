import { collection, addDoc } from "firebase/firestore"
import teachers from "../data/teachers.json"
import {db} from "../services/firebase"
import toast from "react-hot-toast";

export async function importTeachers() {
    try {
        for (const teacher of teachers) {
            await addDoc(collection(db, "teachers"), teacher)
        }
    } catch  {
          toast.error("Import failed");
    }
}