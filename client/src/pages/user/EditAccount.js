// Imports
import React, { useState, useContext, useEffect } from "react"
// import styled from "styled-components"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth"
// import { useParams, useNavigate } from "react-router-dom"

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
    const user = useContext(AuthContext).user

    const [fullName, setFullName] = useState(user.fullName)
    const [email, setEmail] = useState(user.email)
    const [address, setAddress] = useState(user.address)
    const [avatar, setAvatar] = useState(user.imageUrl)

    const handleFullName = e => setFullName(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handleAddress = e => setAddress(e.target.value)
    
    const handleSubmit = e => {
        e.preventDefault()
        
    }

    return (
        <Page title="Edit your account" description="" keywords="">
            <form onSubmit={handleSubmit}>
                <Container>
                    <Aside>
                        <ProfilePicture
                            edit
                            src={user.imageUrl}
                            alt={user.fullName}
                        />

                        <Button primary justify="center">
                            Save
                        </Button>
                    </Aside>

                    <Content large>
                        <Font.H1>Edit your account</Font.H1>

                        <Form container>
                            <Input
                                label="Your name"
                                name="fullName"
                                id="fullName"
                                defaultValue={user.fullName}
                                onChange={handleFullName}
                            />
                            {/* <input onChange={e => handleFullName(e)} defaultValue={user.fullName} /> */}
                            <Input
                                label="Your email"
                                name="email"
                                id="emailEdit"
                                type="email"
                                value={user.email}
                                onChange={handleEmail}
                                disabled
                            />
                            <Input
                                label="Your city"
                                name="city"
                                id="city"
                                defaultValue={user.city}
                                onChange={handleAddress}
                            />

                            <Font.P>
                                <Link to="/my-account/edit/edit-password">
                                    Change your password
                                </Link>
                            </Font.P>
                        </Form>
                    </Content>
                </Container>
            </form>
        </Page>
    )
}

export default EditAccount
