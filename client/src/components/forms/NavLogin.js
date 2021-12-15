// Packages
import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${Variables.Margins.M};
    margin-bottom: ${Variables.Margins.L};

    a {
        position: relative;
        color: ${Variables.ThemeColors.Primary};
        font-weight: ${Variables.FontWeights.Bold};
        text-decoration: none;

        &.active:before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 100%;
            height: 4px;
            background-color: ${Variables.ThemeColors.Primary};
        }
    }
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

