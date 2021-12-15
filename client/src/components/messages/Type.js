// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Icon from "../ui/Icon"

// Styles
const Container = styled.div``

const Textarea = styled.textarea``

function Type(props) {
    return (
        <Container>
            <Textarea>{props.children}</Textarea>
            <Icon name="send" color={Variables.ThemeColors.Primary} size={24} />
        </Container>
    )
}

export default Type
