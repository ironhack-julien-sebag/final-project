// Imports
import React, { useContext, useState } from "react"
import { v4 as uuid } from "uuid"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import Container, {
    Aside,
    ItemContainer,
    ArtistContainer,
} from "../../components/layouts/Container"
import ProfilePicture from "../../components/artists/ProfilePicture"
import Youtube from "../../components/ui/Youtube"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import Textarea from "../../components/forms/Textarea"
import ButtonSocial from "../../components/ui/ButtonSocial"
// import Button from "../../components/ui/Button"
import TextIcon from "../../components/forms/TextIcon"
import SocialContainer from "../../components/ui/SocialContainer"
import { AuthContext } from "../../context/auth"

// Utils
import convertDate from "../../components/utils/ConvertDate"
import getToday from "../../components/utils/GetToday"

const API_URL = "http://localhost:5005"

function ArtistDetail(props) {
    const conditions =
        props.artist.youtubeLink ||
        props.artist.facebookLink ||
        props.artist.instagramLink

    const { isLoggedIn } = useContext(AuthContext)
    const user = useContext(AuthContext).user

    const navigate = useNavigate()

    // Messages
    const [message, setMessage] = useState("")
    const [date, setDate] = useState("")

    // const [sender, setSender] = useState("")
    const [sender] = useState(user._id)
    const [receiver] = useState(props.artist._id)
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleMessage = e => setMessage(e.target.value)
    const handleDate = e => setDate(e.target.value.toLocaleString())

    // if (isLoggedIn) {
    //     setSender(user._id)
    // }

    const handleSubmit = e => {
        e.preventDefault()
        const requestBody = { message, date, sender, receiver }
        axios
            .put(`${API_URL}/api/send-message`, requestBody)
            .then(res => {
                // console.log(res)
                navigate("/my-account")
            })
            .catch(err => {
                const errorDescription = err.response
                setErrorMessage(errorDescription)
            })
    }

    return (
        <Page title={props.artist.fullName} description="" keywords="">
            <Container>
                <Aside artist>
                    <ProfilePicture
                        src={props.artist.imageUrl}
                        alt={props.artist.fullName}
                    />
                </Aside>

                <ArtistContainer>
                    <Font.H1>{props.artist.fullName}</Font.H1>

                    <TextIcon title="Location" value={props.artist.city} />

                    <TextIcon title="Price" value={`${props.artist.price}€`} />

                    <Font.P bio>{props.artist.bio}</Font.P>

                    {props.artist.youtube.length > 0 && (
                        <>
                            <Font.H3>Videos</Font.H3>

                            {props.artist.youtube.map(item => (
                                <Youtube src={item} key={uuid()} />
                            ))}
                        </>
                    )}

                    {!isLoggedIn ? (
                        <Font.P>
                            Please <Link to="/login">log in</Link> to contact{" "}
                            {props.artist.fullName}
                        </Font.P>
                    ) : isLoggedIn && user._id !== props.artist._id ? (
                        <>
                            <Font.H3>Contact {props.artist.fullName}</Font.H3>

                            <Form btnPrimary="Send" onSubmit={handleSubmit}>
                                <Input
                                    type="hidden"
                                    name="sender"
                                    id="sender"
                                    value={sender}
                                    hidden
                                />

                                <Input
                                    type="hidden"
                                    name="receiver"
                                    id="receiver"
                                    value={receiver}
                                    hidden
                                />

                                <Input
                                    label="Enquiry for"
                                    type="date"
                                    name="dateFor"
                                    id="dateFor"
                                    min={getToday()}
                                    defaultValue={getToday()}
                                    onChange={handleDate}
                                />

                                <Textarea
                                    label="Your message"
                                    name="message"
                                    id="message"
                                    onChange={handleMessage}
                                />
                            </Form>

                            {errorMessage && <Font.P>{errorMessage}</Font.P>}
                        </>
                    ) : (
                        ""
                    )}
                </ArtistContainer>

                <Aside>
                    <ItemContainer>
                        <Font.H4>Availabilities</Font.H4>

                        <Font.List>
                            {props.artist.available.sort().map(item => (
                                <li key={uuid()}>{convertDate(item)}</li>
                            ))}
                        </Font.List>
                    </ItemContainer>

                    {conditions && (
                        <ItemContainer>
                            <Font.H4>Follow</Font.H4>

                            <SocialContainer>
                                {props.artist.youtubeLink && (
                                    <ButtonSocial
                                        type="youtube"
                                        to={props.artist.youtubeLink}
                                    />
                                )}

                                {props.artist.facebookLink && (
                                    <ButtonSocial
                                        type="facebook"
                                        to={props.artist.facebookLink}
                                    />
                                )}

                                {props.artist.instagramLink && (
                                    <ButtonSocial
                                        type="instagram"
                                        to={props.artist.instagramLink}
                                    />
                                )}
                            </SocialContainer>
                        </ItemContainer>
                    )}
                </Aside>
            </Container>
        </Page>
    )
}

export default ArtistDetail
