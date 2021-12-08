// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Input from "./Input"
import Icon from "../ui/Icon"

// Styles
const Container = styled(Font.P)`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > span:first-child {
        margin-right: ${Variables.Margins.XXS};
    }

    input {
        flex-grow: 1;
    }
`

function TextIcon(props) {
    return (
        <Container>
            <Icon name="map" color={Variables.ThemeColors.Primary} size={16} />

            <span>
                <Font.Strong>{props.title}:</Font.Strong>{" "}
                {props.input ? (
                    <Input
                        name="location"
                        id="location"
                        value={props.value}
                        style={{ display: "inline" }}
                        type={props.title === "Price" ? "number" : "text"}
                    />
                ) : (
                    props.value
                )}
            </span>
        </Container>
    )
}

export default TextIcon
