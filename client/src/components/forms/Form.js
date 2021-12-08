// Packages
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

// Components
import * as Variables from "../styles/Variables"
// import * as Font from "../styles/Font"
import Button from "../ui/Button"

// Styles
const Container = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
    width: 100%;
    max-width: 60ch;
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    button:first-child {
        margin-right: ${Variables.Margins.M};
    }
`

function Form(props) {
    return (
        <Container action={props.action} method={props.method} as={props.container && "div"}>
            {props.children}

            {props.btnPrimary && (
                <ButtonsContainer>
                    <Button type="submit" primary>
                        {props.btnPrimary}
                    </Button>

                    {props.cancel && (
                        <Button type="reset" secondary>
                            {props.btnSecondary}
                        </Button>
                    )}

                    {props.backLink && (
                        <Button as={Link} to={props.backLink} secondary>
                            {props.btnSecondary}
                        </Button>
                    )}
                </ButtonsContainer>
            )}
        </Container>
    )
}

export default Form
