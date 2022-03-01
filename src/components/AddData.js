import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerDataAsync } from '../redux/actions/dataAction'
import { Centro } from '../styles/LogStyles'
import Data from './Data'
import { updateDataAsync } from "../redux/actions/dataAction";
import { v4 as uuidv4 } from 'uuid';

const AddData = () => {

  const dispatch = useDispatch()

  const [envio, setEnvio] = useState({
    id:uuidv4(),
    product: '',
    brand: '',
    items: 1,
    quantity: '',
    price: ''
  })

  const handleInputChange = ({ target }) => {
    setEnvio({
      ...envio,
      [target.name]: target.value
    })
  }

  const { product, brand, quantity, price } = envio

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(registerDataAsync(envio))
  }

  const handleReset = () => {
    setEnvio({
      product: '',
      brand: '',
      items: 1,
      quantity: '',
      price: ''
    })
  }

  return (
    <Centro className='row'>
      <Button
        variant="success"
        as={Link}
        to="/home"
      >Atras</Button>
      <h3 className="text-center col mt-4 mb-3"> Nuevo Ingrediente </h3>
      <div id='contenedor2' className='mx-auto ps-3 row'>
        <div id='contenedor1' className='mx-auto ps-3 col'>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Nombre Producto</label>
              <input
                required
                name='product'
                value={product}
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Nombre Producto"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Marca</label>
              <input
                required
                name='brand'
                value={brand}
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Marca"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Cantidad</label>
              <input
                required
                name='quantity'
                value={quantity}
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Cantidad"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Precio</label>
              <input
                required
                name='price'
                value={price}
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Precio $"
              />
            </div>
            <Button
              className="btn btn-success ps-3 my-3"
              type='submit'
            >Nuevo</Button>
            <Button
              onClick={() => handleReset()}
              type='button'
            >Reset Form</Button>
            <Button
            onClick={()=>{dispatch(updateDataAsync(envio))}}
              className="btn btn-danger mt-5 me-3 position-absolute top-50 translate-middle-y end-0"
              type='button'
            >Editar</Button>
          </form>
        </div>
        <div className=' mx-auto my-4'>
        </div>
      </div>
      <Data setEnvio={setEnvio} />
    </Centro>
  )
}

export default AddData