import { addDoc, collection, deleteDoc, doc, getDocs, query, where, updateDoc  } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesData } from "../types/types"


export const registerDataAsync = (newRecipe) => {
    return (dispatch) => {
        addDoc(collection(db, "data"), newRecipe)
            .then(resp => {
                console.log(resp);
                dispatch(registerDataSync(newRecipe))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const registerDataSync = (newRecipe) => {
    return {
        type: typesData.nueva,
        payload: newRecipe
    }
}


export const listDataAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "data"));
        console.log(querySnapshot);
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push({
                ...doc.data()
            })
        });
        dispatch(listDataSync(data));
    }
}

export const listDataSync = (data) => {
    return {
        type: typesData.listar,
        payload: data
    }
}


export const deleteDataAsync = (product) => {
    return async (dispatch) => {

        const estCollection = collection(db, "data",);
        const q = query(estCollection, where("id", "==", product))

        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db, "data", docu.id));
        })
        dispatch(deleteSync(product));
        dispatch(listDataAsync())
    }
}

export const deleteSync = (product) => {
    return {
        type: typesData.borrar,
        payload: product
    }
}

export const updateDataAsync = (data) => {
    return async (dispatch) => {
      const coleccion = collection(db, "data");
      const consulta = query(coleccion, where("id", "==", data.id));
      const datos = await getDocs(consulta);
      datos.forEach((docu) => {
        const nuevosCambios = {
          product: data.product,
          brand: data.brand,
          quantity: data.quantity,
          price: data.price,
        };
        updateDoc(doc(db, "data", docu.id), nuevosCambios);
      });
      dispatch(listDataAsync());
    };
  };