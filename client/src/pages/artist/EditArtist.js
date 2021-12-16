// Imports
import React, { useState, useEffect, useContext } from "react"
import { v4 as uuid } from "uuid"
import axios from "axios"
import { AuthContext } from "../../context/auth"
import { useNavigate } from "react-router-dom"

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
// import convertDate from "../../components/utils/ConvertDate"
import getToday from "../../components/utils/GetToday"

function EditArtist(props) {
    const [fullName, setFullName] = useState("")
    const [city, setCity] = useState("")
    const [bio, setBio] = useState("")
    const [price, setPrice] = useState("")

    useEffect(() => {
        setFullName(props.artist.fullName)
        setBio(props.artist.bio)
        setCity(props.artist.city)
        setPrice(props.artist.price)
    }, [])

    const navigate = useNavigate()

    const { user, setUser, setToken, logoutUser } = useContext(AuthContext)

    const handleFullName = e => setFullName(e.target.value)
    const handleCity = e => setCity(e.target.value)
    const handleBio = e => setBio(e.target.value)
    const handlePrice = e => setPrice(e.target.value)

    console.log(user._id)

    const handleForm = e => {
        e.preventDefault()

        const requestBody = { fullName, bio, city, price, id: props.artist._id }

        console.log(requestBody)

        axios
            .put(`/api/edit-artist`, requestBody)
            .then(res => {
                const { token, user } = res.data
                console.log(user, token)
                setUser(user)
                setToken(token)

                setFullName(requestBody.fullName)
                setCity(requestBody.city)
                setBio(requestBody.bio)
                setPrice(requestBody.price)
                
                navigate(`/artists/${props.artist._id}`)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Page title={`Edit ${fullName}`} description="" keywords="">
            <form onSubmit={handleForm}>
                <Container>
                    <Aside artist>
                        <ProfilePicture src={props.artist.imageUrl} />
                        <Button type="submit" primary>
                            Save
                        </Button>
                    </Aside>

                    <ArtistContainer>
                        <Input
                            large
                            name="fullName"
                            id="fullName"
                            value={fullName}
                            onChange={handleFullName}
                        />

                        <TextIcon
                            input
                            title="City"
                            defaultValue={city}
                            value={city}
                            onChange={handleCity}
                        />

                        <TextIcon
                            title="Price"
                            defaultValue={price}
                            value={price}
                            input
                            onChange={handlePrice}
                        />

                        <Textarea onChange={handleBio}>{bio}</Textarea>

                        <Font.H4>YouTube links</Font.H4>

                        {props.artist.youtube.length > 0 ? (
                            props.artist.youtube.map(link => (
                                <Input key={uuid()} />
                            ))
                        ) : (
                            <Input />
                        )}
                    </ArtistContainer>

                    <Aside>
                        <ItemContainer>
                            <Font.H4>Availabilities</Font.H4>

                            {props.artist.available > 0 ? (
                                <>
                                    <Font.List>
                                        {props.artist.available.map(date => (
                                            <li key={uuid()}>{date}</li>
                                        ))}
                                    </Font.List>
                                </>
                            ) : (
                                <Input
                                    label="Add new availability"
                                    type="date"
                                    min={getToday()}
                                />
                            )}
                        </ItemContainer>
                    </Aside>
                </Container>
            </form>
        </Page>
    )
}

export default EditArtist
