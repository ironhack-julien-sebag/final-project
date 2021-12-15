// Packages
import React from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"

// Styles
const Container = styled.div``

const Item = styled.div``

function List(props) {
    return (
        <Container>
            {props.conversation.map(conversation => (
                <Item key={uuid()}>{conversation}</Item>
            ))}
        </Container>
    )
}

export default List
