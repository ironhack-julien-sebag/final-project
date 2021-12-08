// Packages
import { createGlobalStyle } from "styled-components"

// Variables
import * as Variables from "./Variables"

// Styles
const GlobalStyles = createGlobalStyle`
    html,
    body {
        background-color: ${Variables.ThemeColors.BackgroundColor};
        color: ${Variables.ThemeColors.FontColor};
        font-family: ${Variables.FontFamilies.Body};
        line-height: ${Variables.LineHeight};
    }
`

export default GlobalStyles
