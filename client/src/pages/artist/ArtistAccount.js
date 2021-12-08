// Imports
import React from "react"
// import styled from "styled-components"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import Container, { Aside, Content } from "../../components/layouts/Container"
import ProfilePicture from "../../components/artists/ProfilePicture"
import Button from "../../components/ui/Button"

// Data
import artists from "../../components/data/artists.json"

const Rone = artists[0]

console.log(Rone)

function ArtistAccount() {
    return (
        <Page title="ArtistAccount" description="" keywords="">
            <Container>
                <Aside>
                    <ProfilePicture src={Rone.picture} alt={Rone.name} />
                    <Button primary to={`/artists/${Rone._id.$oid}`} justify="center">Check your page</Button>
                    <Button to="artist/edit" justify="center">Edit your account</Button>
                </Aside>

                <Content large>
                    <Font.H1>Welcome {Rone.name}</Font.H1>
                </Content>
            </Container>
        </Page>
    )
}

export default ArtistAccount
