import { collection, addDoc } from "firebase/firestore"
import teachers from "../data/teachers.json"
import {db} from "../services/firebase"

export async function importTeachers() {
    try {
        for (const teacher of teachers) {
            await addDoc(collection(db, "teachers"), teacher)
        }
        console.log("✅Success")
    } catch (error) {
        console.log("❌Error:", error)
    }
}