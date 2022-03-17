import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../../Context/AuthContext'
const PrivateRoute = () => {
    const {authState:{isLogin}} = useAuthContext();
    return (
        (isLogin ? <Outlet /> : <Navigate to="/LoginPage" />)
    )
}

export { PrivateRoute }