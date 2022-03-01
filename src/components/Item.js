import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Item = ({ data, addToCart }) => {

    const { product, brand, quantity, price, items, id } = data


    return (
        <Card className=' mx-auto col' style={{ height: 110 }}>
            <div className='position-absolute top-50 start-0 translate-middle-y ms-1 row'>
                <h3>{items}</h3>
            </div>
            <div className='position-absolute top-50 start-0 translate-middle-y pe-1 ms-5 row'>
                <h1 className='fs-5 fw-bold'>{product}</h1>
                <h2 className='fs-6 fw-light'>{brand}</h2>
                <h3 className='fs-6 fst-italic'>{quantity}</h3>
            </div>
            <div className="position-absolute top-50 translate-middle-y end-0 me-2 col">
                <h4 className=' text-success fw-bold col'>{price} $</h4>
                <Button
                    variant="outline-success"
                    onClick={() => { addToCart(data) }}>
                    Añadir
                </Button>
            </div>
        </Card>
    )
}

export default Item