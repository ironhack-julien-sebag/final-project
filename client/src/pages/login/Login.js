// Imports
import React from "react"
// import styled from "styled-components"
// import { Link } from "react-router-dom"

// Components
import Page from "../../components/layouts/Page"
// import * as Font from "../components/styles/Font"
// import * as Variables from "../components/styles/Variables"
import Container, { Aside, Content } from "../../components/layouts/Container"
import TabsLogin from "../../components/forms/TabsLogin"

function Login() {
    return (
        <Page title="Login" description="" keywords="" headerBackground>
            <Container>
                <Aside />

                <Content>
                    <TabsLogin />
                </Content>

                <Aside />
            </Container>
        </Page>
    )
}

export default Login
