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
// const API_URL = "http://localhost:5005"

import service from "../../api/service"

function EditAccount() {
    const { user, setUser, setToken, logoutUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const [fullName, setFullName] = useState(user.fullName)
    const [email, setEmail] = useState(user.email)
    const [city, setCity] = useState(user.city)
    const [errorMessage, setErrorMessage] = useState(undefined)
    // const [avatar, setAvatar] = useState(user.imageUrl)
    // const [imageUrl, setImageUrl] = useState(user.imageUrl)

    const handleFullName = e => setFullName(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handleCity = e => setCity(e.target.value)
    // const handleImage = e => setImageUrl(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        const requestBody = { fullName, email, city, id: user._id }
        axios
            .put(`/api/edit-user`, requestBody)
            .then(res => {
                const { token, user } = res.data

                setUser(user)
                setToken(token)
                navigate("/my-account")
            })
            .catch(err => {
                console.log(err)
            })
    }

    // const handleImageUpload = e => {
    //     // e.preventDefault()
    //     // const requestBody = { avatar: user.imageUrl }

    //     // axios.put("/api/edit-avatar", requestBody).then(res => console.log(res))``
    //     const uploadData = new FormData()
    //     uploadData.append("imageUrl", e.target.files[0])

    //     service.uploadImage(uploadData).then(res => console.log(res)).catch(err => console.log(err))
    // }

    // Delete
    const handleDelete = () => {
        axios
            .delete(`/api/delete/${user._id}`)
            .then(() => {
                navigate("/")
                logoutUser()
                // logoutUser()
            })
            .catch(err => console.log(err))
    }

    return (
        <Page title="Edit your account" description="" keywords="">
            <Container>
                <Aside>
                    {/* <form onSubmit={handleImageUpload}>
                        <input
                            type="file"
                            name="avatar"
                            id="avatar"
                            // defaultValue={imageUrl}
                            onChange={handleImage}
                            // value={avatar}
                        />

                        <button type="submit">Send image</button>
                    </form> */}
                    <ProfilePicture
                        src={user.imageUrl}
                        alt={user.fullName}
                    />

                    {/* <Button primary justify="center" type="submit">
                        Save
                    </Button> */}
                </Aside>

                <Content large>
                    <Font.H1>Edit your account</Font.H1>

                    <Form onSubmit={handleSubmit} btnPrimary="Save">
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

                    <DangerZone delete={handleDelete} />
                </Content>
            </Container>
        </Page>
    )
}
export default EditAccount
