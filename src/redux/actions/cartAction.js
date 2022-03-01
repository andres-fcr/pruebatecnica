import { typesCart } from "../types/types"


export const addToCart = (data) => {
    return {
        type: typesCart.addCart,
        payload: data
    }
}



export const ClearCart = ()=>{
    return{
        type: typesCart.clearCart,
        payload:''
    }
}