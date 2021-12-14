// Imports
import React, { useState, useEffect } from "react"
import { v4 as uuid } from "uuid"
import axios from "axios"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import Container, { Content } from "../../components/layouts/Container"
import SearchArtists from "../../components/forms/SearchArtists"
import List from "../../components/artists/List"
import Card from "../../components/artists/Card"

// Utils
// import { getMinPrice, getMaxPrice } from "../../components/utils/MinMaxPrice"

function Artists() {
    const [artistsList, setArtistsList] = useState([])

    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(20000)

    // Loading state
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get("/api/users")
            .then(res => {
                setArtistsList(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    let allArtists = artistsList.filter(artist => artist.role === "artist")

    const [query, setQuery] = useState("")

    const [sortedPrice, setSortedPrice] = useState(false)
    const [sortedDate, setSortedDate] = useState(false)

    const [city, setCity] = useState("All")
    const [genre, setGenre] = useState("All")

    const handleSearch = e => {
        setQuery(e.target.value)
    }

    const handleMinPrice = e => {
        setMinPrice(e.target.value)
    }

    const handleMaxPrice = e => {
        setMaxPrice(e.target.value)
    }

    let results = allArtists.filter(
        artist =>
            artist.fullName.toLowerCase().includes(query) &&
            artist.price >= minPrice &&
            artist.price <= maxPrice
    )

    const sortByPrice = e => {
        setSortedPrice(e.target.checked)
        setSortedDate(false)
    }

    const sortByDate = e => {
        setSortedPrice(false)
        setSortedDate(e.target.checked)
    }

    if (sortedPrice) {
        results = results.sort((a, b) => a.price - b.price)
    }

    if (sortedDate) {
        results = results.sort(
            (a, b) => new Date(a.available[0]) - new Date(b.available[0])
        )
    }

    const handleCityChange = e => setCity(e.target.value)

    if (city !== "All") {
        results = results.filter(artist => city === artist.city)
    }

    const handleGenreChange = e => setGenre(e.target.value)

    if (genre !== "All") {
        results = results.filter(artist => genre === artist.genre)
    }

    return (
        <Page title="Artists" description="" keywords="">
            <Container>
                <SearchArtists
                    handleSearch={handleSearch}
                    sortByPrice={sortByPrice}
                    sortByAvailabilities={sortByDate}
                    artists={artistsList}
                    changeMin={handleMinPrice}
                    changeMax={handleMaxPrice}
                    handleCity={handleCityChange}
                    valueSelectLocation={city}
                    handleGenre={handleGenreChange}
                    valueSelectGenre={genre}
                    min={0}
                    max={20000}
                />

                <Content large>
                    <Font.H1 hidden>Artists list</Font.H1>

                    <List>
                        {isLoading ? (
                            <Font.P>Loading</Font.P>
                        ) : !isLoading && results.length === 0 ? (
                            <Font.P>
                                No artists are corresponding to your search
                            </Font.P>
                        ) : !isLoading && results.length !== 0 ? (
                            results.map(artist => (
                                <Card artist={artist} key={uuid()} />
                            ))
                        ) : (
                            ""
                        )}
                    </List>
                </Content>
            </Container>
        </Page>
    )
}

export default Artists
