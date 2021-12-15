// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"

// Styles
const Message = styled(Font.P)`
    padding: ${Variables.Margins.S};
    background: ${Variables.ThemeColors.Primary};
    color: ${Variables.ThemeColors.BackgroundColor};
`

export default Message
