
import { typesCart } from "../types/types"



const initialState = {
    cart: []
}


export const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesCart.addCart:
            return {
                cart: [...state.cart, action.payload]
            }
        case typesCart.removeOne:
            return {
                
            }
        case typesCart.removeAll:
            return {}
        case typesCart.clearCart:
            return {cart:[]}
        default:
            return state
    }
}