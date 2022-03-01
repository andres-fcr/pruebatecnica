import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { types } from "../types/types"

export const registerSync = (name, email, password) => {
    return {
        type: types.registro,
        payload: {
            name,
            email,
            password
        }
    }
}

export const resgisterAsync = (name, email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then(async({user})=>{
            await updateProfile(auth.currentUser,{displayName:name})
            dispatch(registerSync(name,email,password))
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
}