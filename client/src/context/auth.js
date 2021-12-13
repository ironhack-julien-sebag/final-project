// Packages
import React, { useState, useEffect } from "react"
import axios from "axios"
// import { useNavigate } from "react-router-dom"

const AuthContext = React.createContext()

// const API_URL = "http://localhost:5005"

function AuthProviderWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // const navigate = useNavigate()

    const logInUser = token => {
        localStorage.setItem("authToken", token)
        verifyStoredToken()
        // navigate("/my-account")
    }

    const logoutUser = () => {
        localStorage.removeItem("authToken")
        setIsLoggedIn(false)
        setUser(null)
    }

    const verifyStoredToken = () => {
        const storedToken = localStorage.getItem("authToken")

        if (storedToken) {
            axios
                .get("/auth/verify", {
                    headers: { Authorization: `Bearer ${storedToken}` },
                })
                .then(res => {
                    const user = res.data
                    setUser(user)
                    setIsLoggedIn(true)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setIsLoggedIn(false)
                    setUser(null)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        verifyStoredToken()
    }, [])

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, user, isLoading, logInUser, logoutUser }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthProviderWrapper, AuthContext }
