// Packages
import styled, {css} from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${Variables.Margins.L};
    padding: calc(88px + ${Variables.Margins.XXL}) 10vw ${Variables.Margins.XXL} 10vw;
    min-height: 100vh;
`

export const Aside = styled.aside`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.L};
    align-self: start;

    ${props => props.artist && css`
        justify-items: center;
    `}
`

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
`

export const Content = styled.main`
    grid-column: span ${props => (props.large ? 3 : 2)};
`

export const ArtistContainer = styled(Content)`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.L};
`

export default Container
