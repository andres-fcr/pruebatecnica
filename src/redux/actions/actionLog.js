import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { facebook, google } from "../../firebase/firebaseConfig"
import { types } from "../types/types"

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(loginSync(user.uid, user.displayName))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const loginFacebook = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, facebook)
            .then(({ user }) => {
                dispatch(loginSync(user.uid, user.displayName))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const loginAsync = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(loginSync(user.uid, user.displayName))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const loginSync = (id, displayName) => {
    return {
        type: types.login,
        payload: {
            id,
            displayName
        }
    }
}

export const logoutAsync = () => {
    return () => {
        const auth = getAuth()
        signOut(auth)
            .then(() => {
                console.log("cerraste sesion");
            })
            .catch((error) => {
                console.log(error);
            })
    }
}