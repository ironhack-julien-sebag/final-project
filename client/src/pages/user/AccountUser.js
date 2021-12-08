// Imports
import React from "react"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import Container, { Aside, Content } from "../../components/layouts/Container"
import ProfilePicture from "../../components/artists/ProfilePicture"
import Button from "../../components/ui/Button"

function AccountUser() {
    return (
        <Page title="User name" description="" keywords="" headerBackground>
            <Container>
                <Aside>
                    <ProfilePicture
                        src="/images/julien.jpg"
                        alt="Profile picture Julien Sebag"
                    />
                    <Button to="/my-account/edit" primary justify="center">
                        Edit your account
                    </Button>
                </Aside>

                <Content large>
                    <Font.H1>Welcome fullName</Font.H1>

                    <Font.H2>Messages</Font.H2>
                </Content>
            </Container>
        </Page>
    )
}

export default AccountUser
