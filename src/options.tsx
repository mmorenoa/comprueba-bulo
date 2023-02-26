import { Grid, Switch } from "@mui/material"
import React, { useState } from "react"

import GlobalStyle from "./components/styles/GlobalStyle"
import {
  Icon,
  OptionsContainer,
  Text,
  TopBar
} from "./components/styles/styled"

const OptionsIndex = () => {
  const [floatingButton, setfloatingButton] = useState(true)
  const [darkMode, setdarkMode] = useState(false)

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

  const enableDarkMode = () => {
    darkMode ? setdarkMode(false) : setdarkMode(true)
    console.log("Modo oscuro: " + darkMode)
  }

  return (
    <OptionsContainer>
      <GlobalStyle />
      <TopBar />
      <Grid container>
        <Grid item xs={1}>
          <Icon
            src={chrome.runtime.getURL("local-responses/luna-creciente128.png")}
          />
        </Grid>
        <Grid item xs={9}>
          <Text>Modo oscuro</Text>
        </Grid>
        <Grid item xs={2}>
          <Switch onChange={enableDarkMode} checked={darkMode} />
        </Grid>
        <Grid item xs={1}>
          <Icon src={chrome.runtime.getURL("local-responses/cheque128.png")} />
        </Grid>
        <Grid item xs={9}>
          <Text>Habilitar botón flotante</Text>
        </Grid>
        <Grid item xs={2}>
          <Switch onChange={disableFloatingButton} checked={floatingButton} />
        </Grid>
      </Grid>
    </OptionsContainer>
  )
}

export default OptionsIndex
