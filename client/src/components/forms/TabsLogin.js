// Packages
import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import {
    TabContainer,
    TabList,
    TabButton,
    TabActive,
    TabContent,
    Tab,
} from "../ui/Tabs"
import Form from "./Form"
import Input from "./Input"
import Password from "./Password"

// Styles
const LinkForgot = styled(Font.P)`
    max-width: 60ch;
    margin-top: ${Variables.Margins.L};
`

function TabsLogin() {
    const [isLoginOpen, setIsLoginOpen] = useState(true)
    const [isCreateOpen, setIsCreateOpen] = useState(false)

    const loginOpen = isLoginOpen ? "open" : ""
    const createOpen = isCreateOpen ? "open" : ""
    const spanCreate = isCreateOpen ? "create" : ""

    return (
        <TabContainer>
            <TabList col={2}>
                <TabButton
                    onClick={() => {
                        setIsLoginOpen(true)
                        setIsCreateOpen(false)
                    }}
                >
                    Log in
                </TabButton>

                <TabButton
                    onClick={() => {
                        setIsLoginOpen(false)
                        setIsCreateOpen(true)
                    }}
                >
                    Create an account
                </TabButton>

                <TabActive className={spanCreate} />
            </TabList>

            <TabContent>
                <Tab className={loginOpen}>
                    <Form action="" method="POST" btnPrimary="Log in">
                        <Input label="Email" name="email" id="email" />

                        <Password label="Password" />
                    </Form>

                    <LinkForgot>
                        <Link to="/forgot-password">I forgot my password</Link>
                    </LinkForgot>
                </Tab>

                <Tab className={createOpen}>
                    <Form
                        action=""
                        method="POST"
                        btnPrimary="Create your account"
                    >
                        <Font.P>
                            If you are a band or an artist who want to be
                            registered on our website,{" "}
                            <Link to="#contact">contact us!</Link>
                        </Font.P>

                        <Input
                            label="Full name"
                            id="fullName"
                            name="fullName"
                        />

                        <Input
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                        />

                        <Input label="Address" id="address" name="address" />

                        <Password label="Password" />
                    </Form>
                </Tab>
            </TabContent>
        </TabContainer>
    )
}

export default TabsLogin
