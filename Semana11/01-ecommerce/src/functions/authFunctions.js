import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
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

const closeSession = async () => {
    try {
        await signOut(auth);
        return true;
    } catch (error) {
        throw error;
    }
}

export {
    loginWithEmail,
    registerWithEmail,
    closeSession
}