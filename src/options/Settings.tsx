import { Grid, InputLabel, MenuItem, Select, Switch } from "@mui/material"
import React, { useState } from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../styles/GlobalStyle"
import { useDarkModeTheme } from "../styles/darkMode/DarkModeThemeContext"
import { Icon, OptionsContainer, Text, TopBar } from "../styles/styled"
import { useDaltonicModeTheme } from "~src/styles/accesibilityMode/AccesibilityThemeContext"

const Settings = () => {
  const [floatingButton, setfloatingButton] = useState(true)

  const disableFloatingButton = () => {
    if (!floatingButton) {
      setfloatingButton(true)
      setfloatingButtonOnBackground(true)
    } else {
      setfloatingButton(false)
      setfloatingButtonOnBackground(false)
    }
  }

  const setfloatingButtonOnBackground = (state) => {
    chrome.storage.local.set({ floatingButton: state }, () => {
      console.log("Botón flotante: " + state)
    })
  }

  const darkModeTheme = useDarkModeTheme()
  const daltonicModeTheme = useDaltonicModeTheme()

  return (
    <ThemeProvider theme={darkModeTheme}>
      <ThemeProvider theme={daltonicModeTheme}>
        <OptionsContainer>
          <GlobalStyle />
          <TopBar />
          <Grid container>
            <Grid item xs={1}>
              <Icon
                src={chrome.runtime.getURL("icons/luna-creciente128.png")}
              />
            </Grid>
            <Grid item xs={9}>
              <Text>Modo oscuro</Text>
            </Grid>
            <Grid item xs={2}>
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
            <Grid item xs={2}>
              <Switch
                onChange={disableFloatingButton}
                checked={floatingButton}
              />
            </Grid>
            <Grid item xs={1}>
              <Icon src={chrome.runtime.getURL("icons/accesibility.png")} />
            </Grid>
            <Grid item xs={9}>
              <Text>Cambiar colores para accesibilidad</Text>
            </Grid>
            <Grid item xs={2}>
              <Select
                value={daltonicModeTheme.daltonicMode}
                label="Colores"
                onChange={daltonicModeTheme.changeDaltonicMode}>
                <MenuItem value={0}>Ninguno</MenuItem>
                <MenuItem value={1}>Deuteranopía</MenuItem>
                <MenuItem value={2}>Protanopía</MenuItem>
                <MenuItem value={3}>Tritanopía</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </OptionsContainer>
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default Settings
