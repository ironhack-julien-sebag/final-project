// Packages
import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"

// Styles
const Container = styled.div`
    
`

function NavLogin() {
    return (
        <Container>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Create an account</NavLink>
        </Container>
    )
}

export default NavLogin

