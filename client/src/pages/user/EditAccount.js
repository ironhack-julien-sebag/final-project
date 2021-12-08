// Imports
import React from "react"
// import styled from "styled-components"
import { Link } from "react-router-dom"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
// import * as Variables from "../components/styles/Variables"
import Container, { Aside, Content } from "../../components/layouts/Container"
import ProfilePicture from "../../components/artists/ProfilePicture"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import Button from "../../components/ui/Button"

function EditAccount() {
    return (
        <Page
            title="Edit your account"
            description=""
            keywords=""
            headerBackground
        >
            <Container>
                <Aside>
                    <ProfilePicture
                        edit
                        src="/images/julien.jpg"
                        alt="Profile picture Julien Sebag"
                    />

                    <Button primary justify="center">Save</Button>
                </Aside>

                <Content large>
                    <Font.H1>Edit your account</Font.H1>

                    <Form
                        action=""
                        method="POST"
                        // btnPrimary="Edit your account"
                        // backLink="/my-account"
                        // btnSecondary="Cancel"
                    >
                        <Input
                            label="Your name"
                            name="fullName"
                            id="fullName"
                            value="Julien Sebag"
                        />
                        <Input
                            label="Your email"
                            name="email"
                            id="email"
                            type="email"
                            value="a@b.com"
                            disabled
                        />
                        <Input
                            label="Your address"
                            name="address"
                            id="address"
                            value="Stephanstraẞe 26, 10559, Berlin"
                        />

                        <Font.P>
                            <Link to="/my-account/edit/edit-password">
                                Change your password
                            </Link>
                        </Font.P>
                    </Form>
                </Content>
            </Container>
        </Page>
    )
}

export default EditAccount
