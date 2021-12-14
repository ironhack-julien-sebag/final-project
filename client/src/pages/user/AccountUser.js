// Imports
import React, { useContext } from "react"
import { AuthContext } from "../../context/auth"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import Container, { Aside, Content } from "../../components/layouts/Container"
import ProfilePicture from "../../components/artists/ProfilePicture"
import Button from "../../components/ui/Button"

function AccountUser() {
    const user = useContext(AuthContext).user

    return (
        <Page title={user.fullName} description="" keywords="">
            <Container>
                <Aside>
                    <ProfilePicture
                        src={user.imageUrl}
                        alt={user.fullName}
                    />
                    {/* <Button to="/my-account/edit" primary justify="center">
                        Edit your account
                    </Button> */}
                </Aside>

                <Content large>
                    <Font.H1>Welcome {user.fullName}</Font.H1>

                    <Font.H2>Messages</Font.H2>
                </Content>
            </Container>
        </Page>
    )
}

export default AccountUser
