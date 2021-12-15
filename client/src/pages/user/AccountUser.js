// Imports
import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth"
import axios from "axios"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import Container, { Aside, Content } from "../../components/layouts/Container"
import ProfilePicture from "../../components/artists/ProfilePicture"
import Button from "../../components/ui/Button"

import MessagesContainer from "../../components/messages/MessagesContainer"

function AccountUser() {
    const user = useContext(AuthContext).user

    // Messages
    const [messagesList, setMessagesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get("/api/all-messages")
            .then(res => {
                setMessagesList(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Page title="User" description="" keywords="">
            <Container>
                <Aside>
                    <ProfilePicture src={user.imageUrl} alt={user.fullName} />
                    <Button to="/my-account/edit" primary justify="center">
                        Edit your account
                    </Button>
                    {user.role === "artist" && (
                        <Button
                            primary
                            to={`/artists/${user._id}`}
                            justify="center"
                        >
                            Check your page
                        </Button>
                    )}
                </Aside>

                <Content large>
                    <Font.H1>Welcome {user.fullName}</Font.H1>

                    <Font.H2>Messages</Font.H2>

                    {isLoading ? (
                        <Font.P>Loading</Font.P>
                    ) : (
                        messagesList.length > 0 && <p></p>
                    )}
                </Content>
            </Container>
        </Page>
    )
}

export default AccountUser

//  <div>
//                             {messagesList.map(message =>
//                                 message.sender._id === user._id ||
//                                 message.receiver._id === user._id
//                                     ? message.message
//                                     : ""
//                             )}
//                         </div>
