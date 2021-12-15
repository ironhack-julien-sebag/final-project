// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
// import * as Font from "../styles/Font"
import Icon from "./Icon"

// Styles
const Container = styled.a`
    width: 48px;
    height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Variables.Radiuses.M};
    background: ${props =>
        props.color === "facebook"
            ? Variables.ThemeColors.Facebook
            : props.color === "youtube"
            ? Variables.ThemeColors.Youtube
            : props.color === "instagram"
            ? Variables.ThemeColors.Instagram
            : ""};
`

function ButtonSocial(props) {
    return (
        <Container
            href={props.to}
            target="_blank"
            rel="noreferrer noopener"
            color={props.type}
        >
            <Icon name={props.type} size={32} color={Variables.ThemeColors.White} />
        </Container>
    )
}

export default ButtonSocial
