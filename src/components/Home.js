import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { addToCart, ClearCart } from '../redux/actions/cartAction'
import { listDataAsync } from '../redux/actions/dataAction'
import { Titulo } from '../styles/HomeStyles'
import Item from './Item'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listDataAsync())
    }, [dispatch])

    const { data } = useSelector(store => store.data)
    console.log(data);

    const { cart } = useSelector(store => store.cart)

    // console.log(cart);
    // const subir = ing.forEach(dat => dispatch(registerDataAsync(dat)))
    // const [state, dispatch] = useReducer(shoppingReducer, initialState)
    // const { cart } = state

    const addCart = (data) => {
        dispatch(addToCart(data))
        // console.log(data);
    }
    const clearC = () => {
        dispatch(ClearCart())
    }

    const totalPrice = () => {
        const reducer = (counter, currentValue) => counter + (currentValue.price * currentValue.items)
        const add = cart.reduce(reducer, 0)
        return add
    }
    const totalItems = () => {
        const reducer = (counter, currentValue) => counter + currentValue.items
        const add = cart.reduce(reducer, 0)
        return add
    }

    return (
        <div className='col w-75 mx-auto mt-5 mb-5'>
            <Button
                variant="outline-success"
                as={Link}
                to="/nuevo"
            >Editar</Button>
            <Titulo className='row'>
                <h1 className='fs-6'>Ingredientes</h1>
                <h2 className='fw-bold mb-4'>Risotto de setas (vegano)</h2>
                <Button variant="link" className='col' >Seleccionar Todo</Button>
                <Button variant="link" className='col me-5' onClick={clearC}>Cancelar Seleccíón</Button>
                <hr />
            </Titulo>
            <div className='row'>

                <form className='mt-5 col'>
                    {
                        data.map(ing => (
                            <Item key={ing.id} data={ing} addToCart={addCart} />

                        ))
                    }
                </form>
                <div className='mt-5 col'>
                    <div className="row">

                        <div className="col">
                            <div>

                                <h5 className="mb-2">Items: {totalItems()}</h5>
                                <h5 className="mb-3">Subtotal</h5>
                                <h5 className="mb-4 fs-5">Gastos de envio</h5>
                                <h4 className="mb-3 fw-bold fs-3">Total</h4>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <div className="text-end">
                                <p></p>
                                <p>{totalPrice()}</p>
                                <p>7 $</p>
                                <p className="text-success fw-bold col fs-3">{totalPrice() + 7} </p>
                            </div>

                        </div>
                        <Button onClick={()=>(Swal.fire(
                            'Listo!',
                            'Tu pago ha sido confirmado',
                            'success'
                        ))} className="mx-auto" variant="success">Comprar Ingredientes {totalPrice() + 7}

                        </Button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home