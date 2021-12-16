// Packages
import React, { useState } from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Button from "../ui/Button"

// Styles
const OpenButton = styled(Font.P)`
    cursor: pointer;
    font-weight: ${Variables.FontWeights.Bold};
    color: ${Variables.ThemeColors.Danger};
    transition: ${Variables.Transitions.Short};

    display: ${props => (!props.open ? "block" : "none")};

    &:hover {
        color: ${Variables.ThemeColors.Danger70};
    }
`

const Container = styled.div`
    background-color: ${Variables.ThemeColors.Danger5};
    padding: ${Variables.Margins.M};
    border: 1px solid ${Variables.ThemeColors.Danger};
    border-radius: ${Variables.Radiuses.L};
    display: ${props => (props.open ? "grid" : "none")};
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    button:first-child {
        margin-right: ${Variables.Margins.XXS};
    }
`

function DangerZone(props) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <OpenButton onClick={() => setOpen(!open)} open={open}>
                Delete your account
            </OpenButton>

            <Container open={open}>
                <Font.P>Are you sure you want to delete your account?</Font.P>

                <ButtonsContainer>
                    <Button danger onClick={props.delete}>
                        Yes delete my account
                    </Button>
                    <Button onClick={() => setOpen(!open)}>No, cancel</Button>
                </ButtonsContainer>
            </Container>
        </>
    )
}

export default DangerZone
