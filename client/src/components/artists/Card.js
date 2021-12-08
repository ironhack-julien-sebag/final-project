// Packages
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Icon from "../ui/Icon"
import Button from "../ui/Button"
import ProfilePicture from "./ProfilePicture"

// Utils
import convertDate from "../utils/ConvertDate"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: ${Variables.Margins.M};
`

// const Image = styled.img`
//     aspect-ratio: 1;
//     border-radius: 50%;
//     object-fit: cover;
// `

const Content = styled.span`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
`

const ButtonStyled = styled(Button)`
    justify-self: start;
`

const TitleContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled(Font.H3)`
    a {
        color: ${Variables.ThemeColors.Primary};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.ThemeColors.Primary70};
        }
    }
`

const Location = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;

    & > span {
        margin-right: ${Variables.Margins.XXS};
    }
`

const Info = styled.span`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`

const TextInfo = styled.span`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
`

function Card({artist}) {
    return (
        <Container>
            <Link to={`/artists/${artist._id.$oid}`}>
                <ProfilePicture src={artist.picture} alt={artist.name} />
            </Link>

            <Content>
                <TitleContainer>
                    <Title>
                        <Link to={`/artists/${artist._id.$oid}`}>
                            {artist.name}
                        </Link>
                    </Title>

                    <Location>
                        <Icon
                            name="map"
                            size={16}
                            color={Variables.ThemeColors.Primary}
                        />

                        {artist.location}
                    </Location>
                </TitleContainer>

                <Info>
                    <TextInfo>
                        <Font.P>
                            <Font.Strong>Genre:</Font.Strong> {artist.genre}
                        </Font.P>

                        <Font.P>
                            <Font.Strong>Next availability:</Font.Strong>{" "}
                            {convertDate(artist.available[0])}
                        </Font.P>

                        <Font.P>
                            <Font.Strong>Price:</Font.Strong> {artist.price} €
                        </Font.P>
                    </TextInfo>

                    <ButtonStyled to={`/artists/${artist._id.$oid}`} primary>
                        See their page
                    </ButtonStyled>
                </Info>
            </Content>
        </Container>
    )
}

export default Card
