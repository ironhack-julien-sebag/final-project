// Imports
import React, { useState } from "react"
// import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

// Components
import Page from "../../components/layouts/Page"
import Container, { Aside, Content } from "../../components/layouts/Container"
import NavLogin from "../../components/forms/NavLogin"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import Password from "../../components/forms/Password"
import * as Font from "../../components/styles/Font"

const API_URL = "http://localhost:5005"

function Signup(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [address, setAddress] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const navigate = useNavigate()

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleFullName = e => setFullName(e.target.value)
    const handleAddress = e => setAddress(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        const requestBody = { email, password, fullName, address }
        axios
            .post(`${API_URL}/auth/signup`, requestBody)
            .then(res => navigate("/login"))
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return (
        <Page
            title="Create your account"
            description=""
            keywords=""
        >
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
                            <Link to="#contact">contact us!</Link>
                        </Font.P>

                        <Input type="hidden" id="role" name="role" value="user" />

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

                        <Input
                            label="Address"
                            id="address"
                            name="address"
                            value={address}
                            onChange={handleAddress}
                        />

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
