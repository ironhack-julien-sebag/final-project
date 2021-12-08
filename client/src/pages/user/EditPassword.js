// Imports
import React from "react"
// import styled from "styled-components"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
// import * as Variables from "../components/styles/Variables"
import Container, { Aside, Content } from "../../components/layouts/Container"
import Form from "../../components/forms/Form"
import Password from "../../components/forms/Password"

function EditPassword() {
    return (
        <Page title="EditPassword" description="" keywords="" headerBackground>
            <Container>
                <Aside />

                <Content>
                    <Font.H1>Edit your password</Font.H1>

                    <Form
                        action=""
                        method="POST"
                        btnPrimary="Edit your password"
                        backLink="/my-account/edit/"
                        btnSecondary="Cancel"
                    >
                        <Password label="New password" />
                    </Form>
                </Content>

                <Aside />
            </Container>
        </Page>
    )
}

export default EditPassword

