import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteDataAsync } from '../redux/actions/dataAction';

const Data = ({ setEnvio }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { data } = useSelector(store => store.data);

    const handleModify = (dat) => {
        setEnvio(dat)
    }

    return (
        <div >
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((dat, index) => (

                            <tr key={index}>
                                <td>{dat.product}</td>
                                <td>{dat.brand}</td>
                                <td>{dat.quantity}</td>
                                <td>{dat.price}</td>
                                <td>
                                    <Button className='my-3'
                                        variant="warning"
                                        onClick={() => { dispatch(deleteDataAsync(dat.id))}}
                                    >
                                        Borrar
                                    </Button>
                                    <Button
                                        variant="outline-warning"
                                        onClick={()=>handleModify(dat)}
                                    >
                                        Editar
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Data