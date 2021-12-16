// Imports
import React, { useContext, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth"
import axios from "axios"
import { v4 as uuid } from "uuid"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import Container, {
    Aside,
    Content,
    ItemContainer,
} from "../../components/layouts/Container"
import ProfilePicture from "../../components/artists/ProfilePicture"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import DangerZone from "../../components/forms/DangerZone"
import Select from "../../components/forms/Select"
import SiteData from "../../components/data/SiteData"
import Textarea from "../../components/forms/Textarea"

import getToday from "../../components/utils/GetToday"
import convertDate from "../../components/utils/ConvertDate"

function EditAccount({ edited, setEdited }) {
    // const { }
    const { user, setUser, setToken, logoutUser } = useContext(AuthContext)

    const [artist, setArtist] = useState("")

    const navigate = useNavigate()

    const [fullName, setFullName] = useState(user.fullName)
    const [email, setEmail] = useState(user.email)
    const [city, setCity] = useState(user.city)
    const [errorMessage, setErrorMessage] = useState(undefined)

    const [price, setPrice] = useState(0)
    const [bio, setBio] = useState("")
    const [genre, setGenre] = useState("")
    const [available, setAvailable] = useState("")

    useEffect(() => {
        axios
            .get(`/api/user/${user._id}`)
            .then(res => {
                setArtist(res.data)
                setPrice(res.data.price)
                setBio(res.data.bio)
                setGenre(res.data.genre)
                setAvailable(res.data.available)
            })
            .catch(err => console.log(err))
    }, [])

    const handleFullName = e => setFullName(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handleCity = e => setCity(e.target.value)

    const handlePrice = e => setPrice(e.target.value)
    const handleBio = e => setBio(e.target.value)
    const handleGenre = e => setGenre(e.target.value)
    const handleAvailable = e => setAvailable([...available, e.target.value])

    const handleSubmitUser = e => {
        e.preventDefault()
        const requestBody = {
            fullName,
            email,
            city,
            id: user._id,
            bio: user.role === "user" ? "" : bio,
            price: user.role === "user" ? "" : price,
            genre: user.role === "user" ? "" : genre,
            available: user.role === "user" ? "" : available,
        }
        axios
            .put(`/api/edit-user`, requestBody)
            .then(res => {
                const { token, user } = res.data

                setUser(user)
                setToken(token)
                setEdited(!edited)
                navigate("/my-account")
            })
            .catch(err => {
                setErrorMessage(err)
            })
    }

    // Delete
    const handleDelete = () => {
        axios
            .delete(`/api/delete/${user._id}`)
            .then(() => {
                navigate("/")
                logoutUser()
            })
            .catch(err => console.log(err))
    }

    return (
        <Page title="Edit your account" description="" keywords="">
            <Container>
                <Aside>
                    <ProfilePicture src={user.imageUrl} alt={user.fullName} />
                </Aside>

                <Content>
                    <Font.H1>Edit your account</Font.H1>

                    <Form onSubmit={handleSubmitUser} btnPrimary="Save">
                        <Input
                            label="Your name"
                            name="fullName"
                            id="fullName"
                            value={fullName}
                            onChange={handleFullName}
                        />

                        <Input
                            label="Your email"
                            name="email"
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleEmail}
                            disabled
                        />

                        <Select
                            label="Your city"
                            value={city}
                            onChange={handleCity}
                        >
                            {SiteData.Cities.map(city => (
                                <option
                                    value={city}
                                    key={uuid()}
                                    selected={city === user.city && "selected"}
                                >
                                    {city}
                                </option>
                            ))}
                        </Select>

                        {user.role === "artist" && (
                            <Select
                                label="Genre"
                                value={genre}
                                onChange={handleGenre}
                            >
                                {SiteData.Genres.map(genre => (
                                    <option
                                        value={genre}
                                        key={uuid()}
                                        selected={
                                            genre === artist.genre && "selected"
                                        }
                                    >
                                        {genre}
                                    </option>
                                ))}
                            </Select>
                        )}

                        {user.role === "artist" && (
                            <Input
                                type="number"
                                label="Your price"
                                defaultValue={price}
                                value={price}
                                onChange={handlePrice}
                            />
                        )}

                        {user.role === "artist" && (
                            <Textarea value={bio} onChange={handleBio} />
                        )}

                        <Font.P>
                            <Link to="/my-account/edit/edit-password">
                                Change your password
                            </Link>
                        </Font.P>

                        {errorMessage && <Font.P>{errorMessage}</Font.P>}
                    </Form>

                    <DangerZone delete={handleDelete} />
                </Content>

                {user.role === "artist" && (
                    <Aside>
                        <ItemContainer>
                            <Font.H4>Availabilities</Font.H4>

                            {available.length !== 0 && (
                                <Font.List>
                                    {available.map(date => (
                                        <li key={uuid()}>
                                            {convertDate(date)}
                                        </li>
                                    ))}
                                </Font.List>
                            )}

                            <Input
                                label="Add availabilities"
                                type="date"
                                onChange={handleAvailable}
                                min={getToday()}
                                value={available[0]}
                            />
                        </ItemContainer>
                    </Aside>
                )}
            </Container>
        </Page>
    )
}
export default EditAccount
