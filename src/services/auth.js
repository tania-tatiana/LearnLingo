import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "./firebase"

export const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const logOut = () => {
    return signOut(auth);
}

export const subscribeToAuthChanges = (callback) => {
    return onAuthStateChanged(auth, callback);
}