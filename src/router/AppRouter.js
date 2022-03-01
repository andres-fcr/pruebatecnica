import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddData from '../components/AddData'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import getData from '../helpers/getData'
import { listDataAsync } from '../redux/actions/dataAction'




const AppRouter = () => {

    const [checking, setChecking] = useState(true)
    const [isLogged, setIsLogged] = useState(false)

    const dispatch = useDispatch()

  
    useEffect(() => {
        dispatch(listDataAsync())
    }, [])

    //    const {data}= useSelector(store=> store.data) 

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLogged(true)
            } else {
                setIsLogged(false)
            }
            setChecking(false)
        })
    }, [setIsLogged, setChecking])

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }
    console.log(isLogged);



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='/home' element={<Home />} />
                <Route path='/nuevo' element={<AddData />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter