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
import TextIcon from "../../components/forms/TextIcon"
import CardSmall, { List } from "../../components/artists/CardSmall"

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

    const conditionContacted = !loading && contacted.length > 0
    const conditionNotContacted = !loading && !contacted.length

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

                    {userInfo.role === "user" && (
                        <>
                            <Font.H2>Artists you contacted</Font.H2>
                            {loading ? (
                                <Font.P>Loading</Font.P>
                            ) : conditionContacted ? (
                                <List>
                                    {contacted.map(artist => (
                                        <CardSmall
                                            to={`/artists/${artist._id}`}
                                            name={artist.fullName}
                                            img={artist.imageUrl}
                                        />
                                    ))}
                                </List>
                            ) : conditionNotContacted ? (
                                <Font.P>
                                    You did not contact any artist yet!
                                </Font.P>
                            ) : (
                                ""
                            )}
                        </>
                    )}
                </Content>
            </Container>
        </Page>
    )
}

export default AccountUser
