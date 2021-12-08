// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
// import * as Font from "../styles/Font"

// Styles
export const TabContainer = styled.div`
    position: relative;
`

export const TabList = styled.div`
    display: grid;
    grid-template-columns: ${props => `repeat(${props.col}, 1fr)`};
    gap: ${Variables.Margins.L};
    position: relative;
`

export const TabButton = styled.button`
    background: none;
    border: none;
    text-align: left;
    padding: 0;
    font-weight: ${Variables.FontWeights.Bold};
    color: ${Variables.Colors.Black};
    font-size: ${Variables.FontSizes.Body};
`

export const TabActive = styled.span`
    position: absolute;
    bottom: -2px;
    width: calc(50% - ${Variables.Margins.L} / 2);
    height: 2px;
    background-color: ${Variables.ThemeColors.Primary};
    left: 0;

    &.create {
        left: inherit;
        right: 0;
    }
`

export const TabContent = styled.div`
    margin-top: ${Variables.Margins.L};
`

export const Tab = styled.div`
    display: none;

    &.open {
        display: block;
    }
`
