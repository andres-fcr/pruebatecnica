import { types } from "../types/types";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                id: action.payload.id,
                name: action.payload.displayname
            }
        case types.logout:
            return {}
        case types.registro:
            return state
        default:
            return state
    }
}