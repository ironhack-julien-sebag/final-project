// Packages
import React from "react"
import { func, string } from "prop-types"
import styled from "styled-components"

// Components
import Icon from "../ui/Icon"
import * as Variables from "../styles/Variables"

// Styles
const Button = styled.button`
    border: none;
    background: none;
    font-size: ${Variables.FontSizes.Body};
    display: inline-flex;
    align-items: center;
    position: relative;
    color: ${Variables.Colors.White};
    font-weight: ${Variables.FontWeights.Regular};
    text-decoration: none;

    &.active {
        font-weight: ${Variables.FontWeights.Bold};
    }

    &:after {
        content: "";
        position: absolute;
        bottom: -2px;
        width: 0;
        background-color: currentColor;
        height: 2px;
        left: 50%;
        transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    &:hover:after {
        width: 100%;
        left: 0;
    }

    &:not(:last-child) {
        margin-right: ${Variables.Margins.M};
    }

    .Icon {
        margin-right: ${Variables.Margins.XS};
    }

    color: ${Variables.Colors.White};
    font-weight: ${Variables.FontWeights.Regular};
    text-decoration: none;
    position: relative;

    &.active {
        font-weight: ${Variables.FontWeights.Bold};
    }

    &:after {
        content: "";
        position: absolute;
        bottom: -2px;
        width: 0;
        background-color: currentColor;
        height: 2px;
        left: 50%;
        transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    &:hover:after {
        width: 100%;
        left: 0;
    }

    &:not(:last-child) {
        margin-right: ${Variables.Margins.M};
    }
`

export default function ToggleTheme({ theme, toggleTheme }) {
    const isLight = theme === "Light"

    return (
        <Button onClick={toggleTheme}>
            <Icon
                name={isLight ? "sun" : "moon"}
                color="currentColor"
                size={12}
                className="Icon"
            />
            
            {isLight ? "Dark" : "Light"} theme
        </Button>
    )
}

ToggleTheme.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
