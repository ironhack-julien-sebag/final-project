// Packages
import React, { useState } from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Icon from "../ui/Icon"
// import Input from "./Input"

// Styles
const Container = styled.div``

const InputContainer = styled.div`
    position: relative;
`

const Input = styled.input`
    width: 100%;
    position: relative;
    z-index: 0;
    border: 1px solid ${Variables.ThemeColors.LightGray};
    border-radius: ${Variables.Radiuses.S};
    padding: ${Variables.Margins.XXS} ${Variables.Margins.XS};
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Label};
    color: ${Variables.ThemeColors.FontColor};
    background-color: ${Variables.ThemeColors.BackgroundColor};
    outline: none;

    &:focus {
        border-color: ${Variables.ThemeColors.Primary};
    }

    &:disabled {
        border: 1px solid transparent;
        background-color: ${Variables.ThemeColors.LightGray};
        cursor: not-allowed;
    }
`

const Button = styled.button`
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    position: absolute;
    right: ${Variables.Margins.XS};
    z-index: 1;
    top: calc(50% - 16px / 2);
`

function Password(props) {
    const [isVisible, setIsVisible] = useState(false)
    const isText = isVisible ? "text" : "password"
    const isIcon = isVisible ? "show" : "show-slash"

    return (
        <Container>
            <Font.Label
                color={Variables.ThemeColors.Primary}
                weight={Variables.FontWeights.Bold}
                htmlFor={props.id}
                big
            >
                {props.label}
            </Font.Label>

            <InputContainer>
                <Input
                    type={isText}
                    id={props.id}
                    name="password"
                    value={props.value}
                    onChange={props.onChange}
                    {...props}
                />

                <Button type="button" aria-label="Show / hide password">
                    <Icon
                        name={isIcon}
                        size={16}
                        color={Variables.ThemeColors.Primary}
                        onClick={() => setIsVisible(!isVisible)}
                    />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Password
