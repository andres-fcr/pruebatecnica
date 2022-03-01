import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { resgisterAsync } from '../redux/actions/registroActions'
import { Centro } from '../styles/LogStyles'

const Register = () => {

    const dispatch = useDispatch()

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = register

    const handleInputchange = ({ target }) => {
        setRegister({
            ...register,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(resgisterAsync(name, email, password))
    }

    return (
        <div>
            <Centro id='contenedor1' className=' row'>
                <h3 className="text-center my-5 "> Registrarme </h3>
                <form className='d-grid gap-2 col-3 mx-auto'
                    onSubmit={handleSubmit}
                >
                    <div className="form-group mb-2">
                        <label htmlFor="formName">Nombre Usuario</label>
                        <input
                            name='name'
                            // value={name}
                            onChange={handleInputchange}
                            type="text"
                            className="form-control"
                            id="formName"
                            placeholder="Nombre Usuario"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="formEmail">Correo Electrónico</label>
                        <input
                            name='email'
                            // value={email}
                            onChange={handleInputchange}
                            type="email"
                            className="form-control"
                            id="formEmail"
                            placeholder="Correo electrónico"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="formPassword">Contraseña</label>
                        <input
                            name='password'
                            // value={password}
                            onChange={handleInputchange}
                            type="password"
                            className="form-control"
                            id="formPassword"
                            placeholder="Introduce tu contraseña"
                        />
                    </div>
             

                        <Button
                            type="submit"
                            variant="outline-success"
                            className="my-2 "
                        // onClick={() => agregarDatos()}
                        >Guardar</Button>

                        <h4 className="text-center col mt-4 ">Ya tienes una cuenta?</h4>
                        <Button
                            as={Link}
                            to="/"
                            variant="success"
                            className="my-2 "
                        >
                            Iniciar Sesión
                        </Button>

                </form>
            </Centro>
        </div>
    )
}

export default Register