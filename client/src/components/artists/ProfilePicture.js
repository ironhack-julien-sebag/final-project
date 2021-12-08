// Packages
import React, {useState} from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
// import * as Font from "../styles/Font"
import Icon from "../ui/Icon"

// Styles
const Container = styled.label`
    position: relative;
    aspect-ratio: 1;
    width: 100%;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
`

const PictureEdit = styled.img`
    aspect-ratio: 1;
    border-radius: 50%;
    width: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
`

const IconContainer = styled.span`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${Variables.Colors.LightGray};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${Variables.Margins.XS} 0;
`

const Input = styled.input`
    display: none;
`

const Picture = styled.img`
    aspect-ratio: 1;
    border-radius: 50%;
    width: 100%;
    object-fit: cover;
`

function ProfilePicture(props) {
    const [image, setImage] = useState(null)

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]))
        }
    }

    return props.edit ? (
        <Container>
            <PictureEdit src={image ? image : props.src} alt={props.alt} />
            
            <IconContainer>
                <Icon name="edit" size={24} color={Variables.ThemeColors.Primary} />
            </IconContainer>

            <Input type="file" name="picture" id="picture" onChange={onImageChange} />
        </Container>
    ) : (
        <Picture src={props.src} alt={props.alt} />
    )
}

export default ProfilePicture
