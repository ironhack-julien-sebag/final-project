// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Message from "./Message"

// Styles
const Container = styled.div`
    
`

function Conversation(props) {
    return (
        <Container>
            <Message>Message sender</Message>
            <Message>Message receiver</Message>
        </Container>
    )
}

export default Conversation

