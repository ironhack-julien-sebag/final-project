// Packages
import React, { useContext, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import { v4 as uuid } from "uuid"

// Components
import Page from "../../components/layouts/Page"
import Container, { Aside, Content } from "../../components/layouts/Container"
import NavLogin from "../../components/forms/NavLogin"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import Password from "../../components/forms/Password"
import Select from "../../components/forms/Select"
import { AuthContext } from "../../context/auth"
import * as Font from "../../components/styles/Font"

import SiteData from "../../components/data/SiteData"

const API_URL = "http://localhost:5005"

function SignupArtist() {
    const { isLoggedIn } = useContext(AuthContext)

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [city, setCity] = useState("Berlin")
    const [errorMessage, setErrorMessage] = useState("")

    const navigate = useNavigate()

    const handlefullName = e => setFullName(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleCity = e => setCity(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        const requestBody = {
            email,
            password,
            fullName,
            city,
            role: "artist",

            bio: "",
            price: 0,
            genre: "",
            available: [],
            youtube: [],
            youtubeLink: "",
            facebookLink: "",
            instagramLink: "",
        }
        axios
            .post(`/auth/signup-artist`, requestBody)
            .then(res => navigate("/login"))
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return isLoggedIn ? (
        <Navigate to="/my-account" />
    ) : (
        <Page title="Sign up as artist">
            <Container>
                <Aside />
                <Content>
                    <NavLogin />

                    <Form
                        btnPrimary="Create your account"
                        onSubmit={handleSubmit}
                    >
                        <Font.P>
                            If you're a user wanting to book artists,{" "}
                            <Link to="/signup">
                                register here instead!
                            </Link>
                        </Font.P>

                        <Input
                            label="Your display name"
                            id="fullName"
                            name="fullName"
                            value={fullName}
                            onChange={handlefullName}
                        />

                        <Input
                            label="Your email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmail}
                        />

                        <Select
                            label="Select your city"
                            value={city}
                            onChange={handleCity}
                        >
                            {SiteData.Cities.map(city => (
                                <option value={city} key={uuid()}>
                                    {city}
                                </option>
                            ))}
                        </Select>

                        <Password
                            label="Your password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePassword}
                        />

                        <Input
                            type="hidden"
                            id="role"
                            name="role"
                            value="artist"
                        />
                    </Form>
                </Content>
            </Container>
        </Page>
    )
}

export default SignupArtist
