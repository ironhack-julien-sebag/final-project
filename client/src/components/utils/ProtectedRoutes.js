// Packages
import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../context/auth"

function ProtectedRoute({ children, redirectTo }) {
    const { isLoggedIn } = useContext(AuthContext)

    return isLoggedIn ? children : <Navigate to={redirectTo} />
}

export default ProtectedRoute
