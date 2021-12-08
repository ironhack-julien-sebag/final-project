// Imports
import React from "react"
// import styled from "styled-components"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
// import * as Variables from "../components/styles/Variables"
import Container, { Content, Aside } from "../../components/layouts/Container"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"

function ForgotPassword() {
    return (
        <Page title="ForgotPassword" description="" keywords="" headerBackground>
            <Container>
                <Aside />
                <Content>
                    <Font.H1>Reset your password</Font.H1>

                    <Font.P>Please enter your email to reset your password</Font.P>

                    <Form action="" method="POST" btnPrimary="Reset your password">
                        <Input label="Your email" name="email" id="email" />
                    </Form>
                </Content>
            </Container>
        </Page>
    )
}

export default ForgotPassword

