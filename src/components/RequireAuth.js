import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useSelector } from 'react-redux'

const RequireAuth = () => {

    //? AuthContext provider (user ve token).
    //! Kontrol burdan da sağlanabilirdi.
    const { auth } = useAuth()

    const location = useLocation()

    const state = useSelector((state => state))
    
    
    return (
       state?.accesToken.accesToken
            ? <Outlet />
            : state?.arr.arr.email
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth;