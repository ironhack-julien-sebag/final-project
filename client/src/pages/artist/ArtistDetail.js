// Imports
import React, { useContext } from "react"
import { v4 as uuid } from "uuid"

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
import Button from "../../components/ui/Button"
import TextIcon from "../../components/forms/TextIcon"
import SocialContainer from "../../components/ui/SocialContainer"
import { AuthContext } from "../../context/auth"

// Utils
import convertDate from "../../components/utils/ConvertDate"
import getToday from "../../components/utils/GetToday"

function ArtistDetail(props) {
    const conditions =
        props.artist.youtubeLink ||
        props.artist.facebookLink ||
        props.artist.instagramLink

    const { isLoggedIn } = useContext(AuthContext)
    const user = useContext(AuthContext).user

    console.log(props.artist)

    return (
        <Page title={props.artist.fullName} description="" keywords="">
            <Container>
                <Aside artist>
                    <ProfilePicture
                        src={props.artist.imageUrl}
                        alt={props.artist.fullName}
                    />

                    {/* {isLoggedIn && user.role === "artist" && (
                        <Button
                            to={`/artists/${props.artist._id}/edit`}
                            primary
                            justify="center"
                        >
                            Edit
                        </Button>
                    )} */}
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

                    {isLoggedIn && user._id !== props.artist._id ? (
                        <>
                            <Font.H3>Contact {props.artist.fullName}</Font.H3>

                            <Form action="" method="POST" btnPrimary="Send">
                                <Input
                                    type="hidden"
                                    name="email"
                                    id="emailArtist"
                                    value="userEmail"
                                    hidden
                                />

                                <Input
                                    label="Date"
                                    type="date"
                                    name="date"
                                    id="date"
                                    min={getToday()}
                                    value={getToday()}
                                />

                                <Textarea
                                    label="Your message"
                                    name="message"
                                    id="message"
                                />
                            </Form>
                        </>
                    ) : !isLoggedIn ? (
                        <Font.P>
                            Please log in to contact {props.artist.fullName}
                        </Font.P>
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
