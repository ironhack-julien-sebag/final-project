// Packages
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

// Components
import Logo from "./Logo"

// Styles
const Img = styled(Logo)`
    --size: 50px;
    width: var(--size);
    height: var(--size);
`

function LogoLink({ color }) {
    return (
        <Link to="/">
            <Img color={color} />
        </Link>
    )
}

export default LogoLink
