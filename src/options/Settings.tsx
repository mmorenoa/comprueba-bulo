import { Grid, Switch } from "@mui/material"
import React, { useState } from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../styles/GlobalStyle"
import { useDarkModeTheme } from "../styles/darkMode/DarkModeThemeContext"
import { Icon, OptionsContainer, Text, TopBar, Select } from "../styles/styled"
import { useDaltonicModeTheme } from "~src/styles/accesibilityMode/AccesibilityThemeContext"

const Settings = () => {
  const [floatingButton, setfloatingButton] = useState(true)

  const disableFloatingButton = () => {
    if (!floatingButton) {
      chrome.storage.local.set({ floatingButton: true }, () => {
        setfloatingButton(true)
      })
    } else {
      chrome.storage.local.set({ floatingButton: false }, () => {
        setfloatingButton(false)
      })
    }
  }

  const darkModeTheme = useDarkModeTheme()
  const daltonicModeTheme = useDaltonicModeTheme()

  return (
    <ThemeProvider theme={darkModeTheme}>
      <ThemeProvider theme={daltonicModeTheme}>
        <OptionsContainer>
          <GlobalStyle />
          <TopBar />
          <Grid container sx={{alignItems: "center"}}>
            <Grid item xs={1}>
              <Icon
                src={chrome.runtime.getURL("icons/luna-creciente128.png")}
              />
            </Grid>
            <Grid item xs={9}>
              <Text>Modo oscuro</Text>
            </Grid>
            <Grid item xs={2} sx={{textAlign: "right"}}>
              <Switch
                onChange={darkModeTheme.toggleDarkMode}
                checked={darkModeTheme.darkMode === true}
              />
            </Grid>
            <Grid item xs={1}>
              <Icon src={chrome.runtime.getURL("icons/cheque128.png")} />
            </Grid>
            <Grid item xs={9}>
              <Text>Habilitar botón flotante</Text>
            </Grid>
            <Grid item xs={2} sx={{textAlign: "right"}}>
              <Switch
                onChange={disableFloatingButton}
                checked={floatingButton}
              />
            </Grid>
            <Grid item xs={1}>
              <Icon src={chrome.runtime.getURL("icons/accesibility.png")} />
            </Grid>
            <Grid item xs={8}>
              <Text>Cambiar colores para accesibilidad</Text>
            </Grid>
            <Grid item xs={3} sx={{textAlign: "right"}}>
              <Select
                value={daltonicModeTheme.daltonicMode}
                onChange={daltonicModeTheme.changeDaltonicMode}>
                <option value={0}>Ninguno</option>
                <option value={1}>Deuteranopía</option>
                <option value={2}>Protanopía</option>
                <option value={3}>Tritanopía</option>
              </Select>
            </Grid>
          </Grid>
        </OptionsContainer>
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default Settings
