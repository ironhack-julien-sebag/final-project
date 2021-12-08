// Packages
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

// Components
import App from "./App"

// Base styles
import "./styles/style.css"

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)