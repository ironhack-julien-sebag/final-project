// Imports
import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth"
import axios from "axios"
import { Link } from "react-router-dom"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import Container, { Aside, Content } from "../../components/layouts/Container"
import ProfilePicture from "../../components/artists/ProfilePicture"
import Button from "../../components/ui/Button"
import TextIcon from "../../components/forms/TextIcon"
import CardSmall, { List } from "../../components/artists/CardSmall"

// import MessagesContainer from "../../components/messages/MessagesContainer"

function AccountUser() {
    const user = useContext(AuthContext).user

    const [userInfo, setUserInfo] = useState("")
    const [contacted, setContacted] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`/api/user/${user._id}`)
            .then(res => {
                setUserInfo(res.data)
                setContacted(res.data.contacted)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    console.log(contacted)

    // Messages
    // const [messagesList, setMessagesList] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     axios
    //         .get("/api/all-messages")
    //         .then(res => {
    //             setMessagesList(res.data)
    //             setIsLoading(false)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    // console.log(user)

    return (
        <Page title={user.fullName} description="" keywords="">
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

                    <TextIcon title="Location" value={user.city} />

                    <Font.H2>Artists you contacted</Font.H2>

                    {loading ? (
                        <Font.P>Loading</Font.P>
                    ) : !loading && contacted.length > 0 ? (
                        <List>
                            {contacted.map(artist => (
                                <CardSmall
                                    to={`/artists/${artist._id}`}
                                    name={artist.fullName}
                                    img={artist.imageUrl}
                                />
                            ))}
                        </List>
                    ) : !loading && contacted.length === 0 (
                        <Font.P>You did not contact any artist yet!</Font.P>
                    )}

                    {/* <Font.H2>Messages</Font.H2>

                    {isLoading ? (
                        <Font.P>Loading</Font.P>
                    ) : (
                        messagesList.length > 0 && <p></p>
                    )} */}
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
