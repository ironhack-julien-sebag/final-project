// Imports
import React, { useContext, useState } from "react"
import axios from "axios"
import { AuthContext } from "../../context/auth"
// import styled from "styled-components"
import { useNavigate } from "react-router-dom"

// Components
import Page from "../../components/layouts/Page"
import Container, { Aside, Content } from "../../components/layouts/Container"
import NavLogin from "../../components/forms/NavLogin"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import Password from "../../components/forms/Password"
import * as Font from "../../components/styles/Font"

const API_URL = "http://localhost:5005"

function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const { logInUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        const requestBody = { email, password }

        axios
            .post(`${API_URL}/auth/login`, requestBody)
            .then(res => {
                const token = res.data.authToken
                logInUser(token)
                navigate("/my-account")
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return (
        <Page title="Login" description="" keywords="">
            <Container>
                <Aside />

                <Content>
                    <NavLogin />

                    <Form
                        onSubmit={handleSubmit}
                        btnPrimary="Log in"
                    >
                        <Input
                            label="Email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmail}
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

export default Login
