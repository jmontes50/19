import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase"

const loginWithEmail = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        return user;
    } catch (error) {
        throw error;
    }
}

const registerWithEmail = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        return user;
    } catch (error) {
        throw error;
    }
}

export {
    loginWithEmail,
    registerWithEmail
}