import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined"
import { Grid, Switch } from "@mui/material"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import React, { useState } from "react"
import { ThemeProvider } from "styled-components"

import LinkCircle from "~src/components/LinkCircle"
import { useDaltonicModeTheme } from "~src/styles/accesibilityMode/AccesibilityThemeContext"
import { backgroundColor, textColor } from "~src/styles/darkMode/darkModeThemeColors"

import GlobalStyle from "../styles/GlobalStyle"
import { useDarkModeTheme } from "../styles/darkMode/DarkModeThemeContext"
import {
  GridWithPadding,
  Icon,
  OptionsContainer,
  Text,
  TopBar
} from "../styles/styled"

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
          <LinkCircle to="popup.html">
            <ArrowBackOutlinedIcon fontSize="large"/>
          </LinkCircle>
          <Grid container sx={{ alignItems: "center" }}>
            <GridWithPadding item xs={1}>
              <Icon
                src={chrome.runtime.getURL("icons/luna-creciente128.png")}
              />
            </GridWithPadding>
            <GridWithPadding item xs={9}>
              <Text>Modo oscuro</Text>
            </GridWithPadding>
            <GridWithPadding item xs={2} sx={{ textAlign: "right" }}>
              <Switch
                onChange={darkModeTheme.toggleDarkMode}
                checked={darkModeTheme.darkMode === true}
              />
            </GridWithPadding>
            <GridWithPadding item xs={1}>
              <Icon src={chrome.runtime.getURL("icons/cheque128.png")} />
            </GridWithPadding>
            <GridWithPadding item xs={9}>
              <Text>Habilitar botón flotante</Text>
            </GridWithPadding>
            <GridWithPadding item xs={2} sx={{ textAlign: "right" }}>
              <Switch
                onChange={disableFloatingButton}
                checked={floatingButton}
              />
            </GridWithPadding>
            <GridWithPadding item xs={1}>
              <Icon src={chrome.runtime.getURL("icons/accesibility.png")} />
            </GridWithPadding>
            <GridWithPadding item xs={8}>
              <Text>Cambiar colores para accesibilidad</Text>
            </GridWithPadding>
            <GridWithPadding item xs={3} sx={{ textAlign: "right" }}>
              <Select
                size="small"
                autoWidth
                value={daltonicModeTheme.daltonicMode}
                onChange={daltonicModeTheme.changeDaltonicMode}
                sx={{ backgroundColor: "#FFF" }}>
                <MenuItem value={0}>Ninguno</MenuItem>
                <MenuItem value={1}>Deuteranopía</MenuItem>
                <MenuItem value={2}>Protanopía</MenuItem>
                <MenuItem value={3}>Tritanopía</MenuItem>
              </Select>
            </GridWithPadding>
          </Grid>
        </OptionsContainer>
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default Settings
