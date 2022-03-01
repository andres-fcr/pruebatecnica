import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap';
import { contadorInitalState, contadorReducer } from '../redux/reducer/contadorReducer';
import { typesCounter } from '../redux/types/types';

const Contador = () => {

    const [state, dispatch] = useReducer(contadorReducer, contadorInitalState);

    const handleSubstract = () => {
        dispatch({ type: typesCounter.DECREMENT })
    }
    const handleAdd = () => {
        dispatch({ type: typesCounter.INCREMENT })
    }
    

    return (
        <div>
            <button  size="sm" variant="primary" onClick={handleSubstract}>
                -
            </button>
            <h4>{state.contador}</h4>
            <button  size="sm" variant="outline-primary" onClick={handleAdd} >
                +
            </button>
        </div>
    )
}

export default Contador