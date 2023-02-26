import { Grid, Switch } from "@mui/material"
import React, { useState } from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../components/styles/GlobalStyle"
import { useTheme } from "../components/styles/ThemeContext"
import {
  Icon,
  OptionsContainer,
  Text,
  TopBar
} from "../components/styles/styled"

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

  const theme = useTheme()

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <OptionsContainer>
        <GlobalStyle />
        <TopBar />
        <Grid container>
          <Grid item xs={1}>
            <Icon
              src={chrome.runtime.getURL(
                "icons/luna-creciente128.png"
              )}
            />
          </Grid>
          <Grid item xs={9}>
            <Text>Modo oscuro</Text>
          </Grid>
          <Grid item xs={2}>
            <Switch
              onChange={() => theme.toggle()}
              checked={theme.mode === "dark"}
            />
          </Grid>
          <Grid item xs={1}>
            <Icon
              src={chrome.runtime.getURL("icons/cheque128.png")}
            />
          </Grid>
          <Grid item xs={9}>
            <Text>Habilitar botón flotante</Text>
          </Grid>
          <Grid item xs={2}>
            <Switch onChange={disableFloatingButton} checked={floatingButton} />
          </Grid>
        </Grid>
      </OptionsContainer>
    </ThemeProvider>
  )
}

export default Settings
