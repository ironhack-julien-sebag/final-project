// Packages
import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

// Components
import * as Variables from "../styles/Variables"
// import * as Font from "../styles/Font"

// Styles
const Container = styled.button`
    border: none;
    padding: ${Variables.Margins.XS} ${Variables.Margins.S};
    background: ${props => (props.primary ? Variables.ThemeColors.Primary : "none")};
    color: ${props => props.primary ? Variables.Colors.White : Variables.ThemeColors.Primary};
    text-decoration: none;
    transition: ${Variables.Transitions.Short};
    border-radius: ${Variables.Radiuses.S};
    font-weight: ${Variables.FontWeights.Bold};
    font-size: ${Variables.FontSizes.Body};

    &:hover {
        background-color: ${props => props.primary ? Variables.ThemeColors.Primary70 : "none"};
        color: ${props => !props.primary && Variables.ThemeColors.Primary70};
    }

    ${props => props.justify && css`
        justify-self: ${props => props.justify};
    `}

    ${props => props.large && css`
        font-size: ${Variables.FontSizes.TitleMedium};
    `}
`

function Button(props) {
    return props.to ? (
        <Container to={props.to} as={Link} {...props}>
            {props.children}
        </Container>
    ) : (
        <Container {...props}>{props.children}</Container>
    )
}

export default Button
