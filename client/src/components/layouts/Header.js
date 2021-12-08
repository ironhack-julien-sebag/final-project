// Packages
import React from "react"
import { NavLink as Link } from "react-router-dom"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

// Components
import Logo from "../ui/LogoLink"
import * as Variables from "../styles/Variables"

// Switch color modes
import ToggleTheme from "../utils/ToggleTheme"

// Data
import NavItems from "../data/NavItems"

// Styles
const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${Variables.Margins.M} 5vw;
    background-color: ${Variables.ThemeColors.NavBackground};
    z-index: 999;
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a {
        color: ${Variables.Colors.White};
        font-weight: ${Variables.FontWeights.Regular};
        text-decoration: none;
        position: relative;

        &.active {
            font-weight: ${Variables.FontWeights.Bold};
        }

        &:after {
            content: "";
            position: absolute;
            bottom: -2px;
            width: 0;
            background-color: currentColor;
            height: 2px;
            left: 50%;
            transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        &:hover:after {
            width: 100%;
            left: 0;
        }

        &:not(:last-child) {
            margin-right: ${Variables.Margins.M};
        }
    }
`

function Header(props) {
    return (
        <Container>
            <Logo />

            <Nav>
                {NavItems.map(item => (
                    <Link to={item.path} key={uuid()}>
                        {item.text}
                    </Link>
                ))}

                <ToggleTheme theme={props.theme} toggleTheme={props.toggleTheme} />

                {/* Login btn */}
                {/* Search here */}
            </Nav>
        </Container>
    )
}

export default Header
