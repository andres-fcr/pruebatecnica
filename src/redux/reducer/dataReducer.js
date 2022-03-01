import { typesData } from '../types/types'

const initialState = {
    data: []
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesData.nueva:
            return {
                data: [action.payload]
            }
        case typesData.listar:
            return {
                data: [...action.payload]
            }
        case typesData.borrar:
            return {
                data: state.data.filter(del => del.name !== action.payload)
            }
        default:
            return state;
    }
}