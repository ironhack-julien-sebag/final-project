// Packages
import React from "react"
import styled from "styled-components"

// Components
// import * as Variables from "../styles/Variables"
// import * as Font from "../styles/Font"

import Conversation from "./Conversation"
import List from "./List"
// import Message from "./Message"
import Type from "./Type"

// Styles
const Container = styled.div`
    
`

const Content = styled.div`
    
`

function MessagesContainer(props) {
    return (
        <Container>
            <List conversation={props.conversations} />
            <Content>
                <Conversation />
                <Type />
            </Content>
        </Container>
    )
}

export default MessagesContainer

