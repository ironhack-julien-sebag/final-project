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
    width: 100vw;

    @media ${Variables.Breakpoints.MobileL} {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Aside = styled.aside`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.L};
    align-self: start;

    ${props =>
        props.artist &&
        css`
            justify-items: center;
        `}

    @media ${Variables.Breakpoints.MobileL} {
        grid-column: span 4;
    }
`

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
`

export const Content = styled.main`
    grid-column: span ${props => (props.large ? 3 : 2)};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.L};
    align-content: start;

    @media ${Variables.Breakpoints.MobileL} {
        grid-column: span 4;
    }
`

export const ArtistContainer = styled(Content)`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.L};
    align-content: start;

    @media ${Variables.Breakpoints.MobileL} {
        grid-column: span 4;
    }
`

export default Container
