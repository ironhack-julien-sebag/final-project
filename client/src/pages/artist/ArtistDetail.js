// Imports
import React, { useContext, useState, useEffect } from "react"
import { v4 as uuid } from "uuid"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

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
import * as Variables from "../../components/styles/Variables"

// Utils
import convertDate from "../../components/utils/ConvertDate"
import getToday from "../../components/utils/GetToday"

// const API_URL = "http://localhost:5005"

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
    const [date, setDate] = useState(getToday())

    // const [sender, setSender] = useState("")
    // const [sender] = useState(user._id)
    // const [receiver] = useState(props.artist._id)
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleMessage = e => setMessage(e.target.value)
    const handleDate = e => setDate(e.target.value.toLocaleString())

    // Contacted
    const [contacted, setContacted] = useState(false)

    useEffect(() => {
        axios
            .get(`/api/user/${isLoggedIn ? user._id : props.artist._id}`)
            .then(res => {
                res.data.contacted.find(artist => {
                    return artist._id === props.artist._id
                        ? setContacted(true)
                        : ""
                })
                console.log(contacted)
            })
            .catch(err => console.log(err))
    }, [])

    // const hasUserContacted = userInfo.contacted

    // console.log(hasUserContacted, props.artist._id)

    const handleSend = e => {
        const requestBody = {
            sender: user.email,
            receiver: props.artist.email,
            date,
            message,
            id: user._id,
            artistId: props.artist._id,
        }
        axios
            .put("/api/contact", requestBody)
            .then(() => navigate("/my-account"))
            .catch(err => setErrorMessage(err.response))
    }

    return (
        <Page title={props.artist.fullName} description="" keywords="">
            <Container>
                <Aside artist>
                    <ProfilePicture
                        src={props.artist.imageUrl}
                        alt={props.artist.fullName}
                    />

                    {/* {isLoggedIn && props.artist._id === user._id && (
                        <Button
                            to={`/artists/${props.artist._id}/edit`}
                            primary
                        >
                            Edit this page
                        </Button>
                    )} */}
                </Aside>

                <ArtistContainer>
                    <Font.H1>{props.artist.fullName}</Font.H1>

                    <TextIcon title="Location" value={props.artist.city} />

                    <TextIcon title="Price" value={`${props.artist.price}€`} />

                    {props.artist.bio !== "" ? (
                        <Font.P bio>{props.artist.bio}</Font.P>
                    ) : (
                        <Font.P>
                            {props.artist.fullName} did not write a bio yet!
                        </Font.P>
                    )}

                    {props.artist.youtube.length > 0 && (
                        <>
                            <Font.H3>Videos</Font.H3>

                            {props.artist.youtube.map(item => (
                                <Youtube src={item} key={uuid()} />
                            ))}
                        </>
                    )}

                    {/* {!isLoggedIn ? (
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
                    )} */}
                    {/* <Form btnPrimary="Send" onSubmit={handleSubmit}>
                   

                        <Input
                            label="Enquiry for"
                            type="date"
                            name="date"
                            id="date"
                            min={getToday()}
                            value={date}
                            // defaultValue={}
                            onChange={handleDate}
                        />

                        <Textarea
                            label="Your message"
                            name="message"
                            id="message"
                            onChange={handleMessage}
                        />
                    </Form> */}

                    {/* {contacted && (
                        <Font.P>
                            You already contacted {props.artist.fullName}!
                        </Font.P>
                    )} */}

                    {!isLoggedIn ? (
                        <Font.P>
                            Please <Link to="/login">log in</Link> to contact{" "}
                            {props.artist.fullName}
                        </Font.P>
                    ) : isLoggedIn && contacted ? (
                            <Font.H5 color={Variables.Colors.Success}>You already contacted {props.artist.fullName}!</Font.H5>
                    ) : isLoggedIn && props.artist._id !== user._id ? (
                        <Form btnPrimary="Send" onSubmit={handleSend}>
                            <Input
                                label="Enquiry for"
                                type="date"
                                name="date"
                                id="date"
                                min={getToday()}
                                value={date}
                                onChange={handleDate}
                            />

                            <Textarea
                                label="Your message"
                                name="message"
                                id="message"
                                onChange={handleMessage}
                            />
                        </Form>
                    ) : (
                        ""
                    )}

                    {errorMessage && <Font.P>{errorMessage}</Font.P>}
                </ArtistContainer>

                <Aside>
                    <ItemContainer>
                        <Font.H4>Availabilities</Font.H4>

                        {props.artist.available.length > 0 ? (
                            <Font.List>
                                {props.artist.available.sort().map(item => (
                                    <li key={uuid()}>{convertDate(item)}</li>
                                ))}
                            </Font.List>
                        ) : (
                            <Font.P>
                                {props.artist.fullName} did not add dates yet,
                                but you can contact them directly!
                            </Font.P>
                        )}
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
