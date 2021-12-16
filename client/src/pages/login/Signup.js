// Imports
import React, { useState, useContext } from "react"
// import styled from "styled-components"
import { Link, useNavigate, Navigate } from "react-router-dom"
import axios from "axios"
import { v4 as uuid } from "uuid"

// Components
import Page from "../../components/layouts/Page"
import Container, { Aside, Content } from "../../components/layouts/Container"
import NavLogin from "../../components/forms/NavLogin"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import Password from "../../components/forms/Password"
import * as Font from "../../components/styles/Font"
import { AuthContext } from "../../context/auth"
import Select from "../../components/forms/Select"
import SiteData from "../../components/data/SiteData"

function Signup(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [city, setCity] = useState(SiteData.Cities[0])
    const [errorMessage, setErrorMessage] = useState(undefined)

    const navigate = useNavigate()

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleFullName = e => setFullName(e.target.value)
    const handleCity = e => setCity(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        const requestBody = { email, password, fullName, city, role: "user" }
        axios
            .post(`/auth/signup`, requestBody)
            .then(res => navigate("/login"))
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    const { isLoggedIn } = useContext(AuthContext)

    return isLoggedIn ? (
        <Navigate to="/my-account" />
    ) : (
        <Page title="Create your account" description="" keywords="">
            <Container>
                <Aside />

                <Content>
                    <NavLogin />

                    <Form
                        onSubmit={handleSubmit}
                        btnPrimary="Create your account"
                    >
                        <Font.P>
                            If you are a band or an artist who want to be
                            registered on our website,{" "}
                            <Link to="/signup/artist">
                                use this form instead!
                            </Link>
                        </Font.P>

                        <Input
                            type="hidden"
                            id="role"
                            name="role"
                            value="user"
                        />

                        <Input
                            label="Full name"
                            id="fullName"
                            name="fullName"
                            value={fullName}
                            onChange={handleFullName}
                        />

                        <Input
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleEmail}
                        />

                        <Select
                            label="Select your city"
                            value={city}
                            onChange={handleCity}
                        >
                            {SiteData.Cities.map(city => (
                                <option
                                    value={city}
                                    key={uuid()}
                                    selected={city === SiteData.Cities[0] ? "selected" : ""}
                                >
                                    {city}
                                </option>
                            ))}
                        </Select>

                        <Password
                            label="Password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePassword}
                        />
                    </Form>

                    {errorMessage && <Font.P>{errorMessage}</Font.P>}
                </Content>

                <Aside />
            </Container>
        </Page>
    )
}

export default Signup
