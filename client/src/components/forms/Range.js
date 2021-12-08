// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Input from "./Input"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${Variables.Margins.M};
`

function Range(props) {
    return (
        <Container>
            <Input
                label={props.labelMin}
                type="number"
                name={props.name}
                id={props.name}
                min={props.min}
                max={props.max}
                value={props.min}
                onChange={props.changeMin}
            />

            <Input
                label={props.labelMax}
                type="number"
                name={props.name}
                id={props.name}
                min={props.min}
                max={props.max}
                value={props.max}
                onChange={props.changeMax}
            />
        </Container>
    )
}

export default Range
