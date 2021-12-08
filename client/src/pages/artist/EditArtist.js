// Imports
import React from "react"
import { v4 as uuid } from "uuid"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
// import * as Variables from "../../components/styles/Variables"
import Container, {
    Aside,
    ArtistContainer,
    ItemContainer,
} from "../../components/layouts/Container"
import ProfilePicture from "../../components/artists/ProfilePicture"
import Input from "../../components/forms/Input"
import Textarea from "../../components/forms/Textarea"
import Button from "../../components/ui/Button"
import TextIcon from "../../components/forms/TextIcon"

// Utils
import convertDate from "../../components/utils/ConvertDate"

function EditArtist(props) {
    return (
        <Page
            title={`Edit ${props.artist.name}`}
            description=""
            keywords=""
            headerBackground
        >
            <Container>
                <Aside artist>
                    <ProfilePicture
                        src={props.artist.picture}
                        alt={`Profile picture ${props.artist.name}`}
                        edit
                    />

                    <Button primary justify="center">
                        Save
                    </Button>
                </Aside>

                <ArtistContainer>
                    <Input
                        name="name"
                        id="name"
                        value={props.artist.name}
                        large
                    />

                    <TextIcon
                        title="Location"
                        value={props.artist.location}
                        input
                    />
                    <TextIcon title="Price" value={props.artist.price} input />

                    <Textarea
                        name="bio"
                        id="bio"
                        value={props.artist.bio}
                        auto
                    />

                    <Font.H4>Medias</Font.H4>

                    {props.artist.youtube.length > 0 ? (
                        props.artist.youtube.map(item => (
                            <Input
                                name={`youtube-${uuid()}`}
                                id={`youtube-${uuid()}`}
                                value={item}
                                key={uuid()}
                            />
                        ))
                    ) : (
                        <Input
                            name={`youtube-${uuid()}`}
                            id={`youtube-${uuid()}`}
                        />
                    )}

                    <Button justify="start">Add a new link</Button>
                </ArtistContainer>

                <Aside>
                    <ItemContainer>
                        <Font.H4>Availabilities</Font.H4>

                        <Font.List>
                            {props.artist.available.sort().map(item => (
                                <li key={uuid()}>{convertDate(item)}</li>
                            ))}
                        </Font.List>

                        <Button to="/my-account/edit-date">Edit dates</Button>
                    </ItemContainer>

                    <ItemContainer>
                        <Font.H4>Follow</Font.H4>

                        <Input
                            label="Youtube"
                            name="youtube"
                            id="youtube"
                            value={props.artist.youtubeLink}
                        />

                        <Input
                            label="Facebook"
                            name="facebook"
                            id="facebook"
                            value={props.artist.facebookLink}
                        />

                        <Input
                            label="Instagram"
                            name="instagram"
                            id="instagram"
                            value={props.artist.instagramLink}
                        />
                    </ItemContainer>
                </Aside>
            </Container>
        </Page>
    )
}

export default EditArtist
