import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { shoppingReducer } from "../reducer/cartReducer";
import { dataReducer } from "../reducer/dataReducer";
import { loginReducer } from "../reducer/loginReducer";
import { registroReducer } from "../reducer/registroReducer";

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    registro: registroReducer,
    data: dataReducer,
    cart: shoppingReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)