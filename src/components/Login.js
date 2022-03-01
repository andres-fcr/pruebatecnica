import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginAsync, loginFacebook, loginGoogle, logoutAsync } from '../redux/actions/actionLog'
import { Centro } from '../styles/LogStyles'

const Login = () => {

    const dispatch = useDispatch()

    const [register, setRegister] = useState({
        email: '',
        password: ''
    })

    const { email, password } = register

    const handleInputChange = ({ target }) => {
        setRegister({
            ...register,
            [target.name]: target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginAsync(email, password))
    }

    const googleAsync = () => {
        dispatch(loginGoogle())
    }

    const facebookAsync = () => {
        dispatch(loginFacebook())
    }
    const handleLogout = () => {
        dispatch(logoutAsync())
    }


    return (
        <Centro id='contenedor1' className='row'>
            <Button
            as={Link}
            to="/home"
            >data</Button>
                <h3 className="text-center my-5"> Iniciar Sesión </h3>
                <form className='d-grid gap-2 col-3 mx-auto'
                    onSubmit={handleSubmit}
                >
                    <div className="form-group mb-2">
                        <label htmlFor="formEmail">Correo Electrónico</label>
                        <input
                            name='email'
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
                            type="password"
                            className="form-control"
                            id="formPassword"
                            placeholder="Contraseña"
                        />
                    </div>
                    <Button
                        variant="success  "
                        className="my-1"
                    >Ingresar</Button>
                    <Button
                        type='button'
                        variant="outline-success"
                        onClick={() => googleAsync()}
                    >
                        <img className="google-icon me-3" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        Ingresar con Google
                    </Button>

                    <Button
                        type='button'
                        variant="outline-success"
                        onClick={() => facebookAsync()}
                    >
                        <img className="facebook-icon me-3" height={24} width="auto" src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1645896664/584ac2d03ac3a570f94a666d_paij0j.png" alt="google button" />
                        Ingresar con Facebook
                    </Button>

                    <h4 className="text-center mt-4">No tienes una cuenta?</h4>
                    <Button
                        as={Link}
                        to="/register"
                        variant="success"
                        className="my-2 row "
                    >
                        Regístrate
                    </Button>
                    <Button onClick={() => handleLogout()}>Logout</Button>
                </form>
        </Centro>
    )
}

export default Login