// Imports
import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth"
import axios from "axios"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import Container, { Aside, Content } from "../../components/layouts/Container"
import ProfilePicture from "../../components/artists/ProfilePicture"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import Button from "../../components/ui/Button"
import DangerZone from "../../components/forms/DangerZone"

const API_URL = "http://localhost:5005"

function EditAccount() {
    const { user, setUser, logInUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const [fullName, setFullName] = useState(user.fullName)
    const [email, setEmail] = useState(user.email)
    const [city, setCity] = useState(user.city)
    const [errorMessage, setErrorMessage] = useState(undefined)
    // const [avatar, setAvatar] = useState(user.imageUrl)

    const handleFullName = e => setFullName(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handleCity = e => setCity(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = { fullName, email, city, id: user._id }

        axios
            .put(`/api/edit-user`, requestBody)
            .then(res => {
                const token = res.data.token                
                logInUser(token)
                setUser(res.data)
                navigate("/my-account")
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
                console.log(err)
            })
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

                        <Button primary justify="center" type="submit">
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
                                value={fullName}
                                onChange={handleFullName}
                            />

                            <Input
                                label="Your email"
                                name="email"
                                id="email"
                                type="email"
                                value={email}
                                onChange={handleEmail}
                                disabled
                            />
                            <Input
                                label="Your city"
                                name="city"
                                id="city"
                                value={city}
                                onChange={handleCity}
                            />

                            <Font.P>
                                <Link to="/my-account/edit/edit-password">
                                    Change your password
                                </Link>
                            </Font.P>

                            {errorMessage && <Font.P>{errorMessage}</Font.P>}
                        </Form>

                        <DangerZone />
                    </Content>
                </Container>
            </form>
        </Page>
    )
}

export default EditAccount
