// Packages
import React, { useState } from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Button from "../ui/Button"

// Styles
const Container = styled.div``

const OpenButton = styled(Font.P)``

const ButtonsContainer = styled.div``

function DangerZone(props) {
    const [open, setOpen] = useState(false)
    const Open = open ? "open" : ""

    return (
        <>
            <OpenButton onClick={() => setOpen(!open)}>
                Delete your account
            </OpenButton>

            <Container className={Open}>
                <Font.P>Are you sure you want to delete your account?</Font.P>

                <ButtonsContainer>
                    <Button danger onClick={props.delete}>Yes delete my account</Button>
                    <Button>No, cancel</Button>
                </ButtonsContainer>
            </Container>
        </>
    )
}

export default DangerZone
