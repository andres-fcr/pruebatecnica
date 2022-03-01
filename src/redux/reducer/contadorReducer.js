import { typesCounter } from "../types/types"

export const contadorInitalState = { contador: 0 }


export function contadorReducer(state, action) {
    switch (action.type) {
        case typesCounter.INCREMENT:
            return { contador: state.contador + 1 }
        case typesCounter.DECREMENT:
            return { contador: state.contador - 1 }
        case typesCounter.RESET:
            return contadorInitalState
        default:
            return state
    }
}