// Imports
import React, { useState } from "react"
// import styled from "styled-components"
import { v4 as uuid } from "uuid"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import Container, {
    // Aside,
    Content,
    // ItemContainer,
} from "../../components/layouts/Container"
import SearchArtists from "../../components/forms/SearchArtists"
// import * as Variables from "../../components/styles/Variables"
import List from "../../components/artists/List"
import Card from "../../components/artists/Card"
// import Form from "../../components/forms/Form"
// import Input from "../../components/forms/Input"
// import Range from "../../components/forms/Range"
// import Select from "../../components/forms/Select"
// import Radio from "../../components/forms/Radio"

// Utils
// import convertDate from "../../components/utils/ConvertDate"
import { getMinPrice, getMaxPrice } from "../../components/utils/MinMaxPrice"

// Data
// import SiteData from "../../components/data/SiteData"
// import Seed from "../../components/data/Seed"
import artists from "../../components/data/artists.json"
// import Button from "../../components/ui/Button"

function Artists() {
    const [artistsList] = useState(artists)
    const [query, setQuery] = useState("")

    const [minPrice, setMinPrice] = useState(getMinPrice(artistsList))
    const [maxPrice, setMaxPrice] = useState(getMaxPrice(artistsList))

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

    let results = artistsList.filter(artist =>
        artist.name.toLowerCase().includes(query)
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
        results = results.filter(artist => city === artist.location)
    }

    const handleGenreChange = e => setGenre(e.target.value)

    if (genre !== "All") {
        results = results.filter(artist => genre === artist.genre)
    }

    return (
        <Page title="Artists" description="" keywords="" headerBackground>
            <Container>
                <SearchArtists
                    handleSearch={handleSearch}
                    sortByPrice={sortByPrice}
                    sortByAvailabilities={sortByDate}
                    artists={artists}
                    changeMin={handleMinPrice}
                    changeMax={handleMaxPrice}
                    handleCity={handleCityChange}
                    valueSelectLocation={city}
                    handleGenre={handleGenreChange}
                    valueSelectGenre={genre}
                />

                <Content large>
                    <Font.H1 hidden>Artists list</Font.H1>

                    <List>
                        {results.length === 0 ? (
                            <Font.P>
                                No artists are corresponding to your search
                            </Font.P>
                        ) : (
                            results.map(artist => (
                                <Card artist={artist} key={uuid()} />
                            ))
                        )}
                    </List>
                </Content>
            </Container>
        </Page>
    )
}

export default Artists
