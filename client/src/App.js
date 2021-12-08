// Packages
import React from "react"
import { ThemeProvider } from "styled-components"
import { useLocation } from "react-router"

// Components
// import Header from "./components/layouts/Header"
import Switch from "./components/Switch"
import useDarkMode from "./components/utils/useDarkMode"
import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"

// Styles
import * as Variables from "./components/styles/Variables"
import GlobalStyles from "./components/styles/GlobalStyles"

function App() {
    const location = useLocation()

    const [theme, setTheme, componentMounted] = useDarkMode()
    const themeMode = theme === "Light" ? Variables.LightTheme : Variables.DarkTheme

    if (!componentMounted) {
        return <div />
    }

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />

            {location.pathname !== "/" && <Header theme={theme} toggleTheme={setTheme} />}

            <Switch />

            {location.pathname !== "/" && <Footer />}
        </ThemeProvider>
    )
}

export default App
