// Packages
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

// Components
import App from "./App"
import { AuthProviderWrapper } from "./context/auth"

// Base styles
import "./styles/style.css"

ReactDOM.render(
    <Router>
        <AuthProviderWrapper>
            <App />
        </AuthProviderWrapper>
    </Router>,
    document.getElementById("root")
)
