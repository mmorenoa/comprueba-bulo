import { Grid, Switch } from "@mui/material"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import { changeLanguage } from "i18next"
import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { useDaltonicModeTheme } from "~src/styles/accesibilityMode/AccesibilityThemeContext"

import SwitchFloatingButton from "../components/SwitchFloatingButton"
import GlobalStyle from "../styles/GlobalStyle"
import { useDarkModeTheme } from "../styles/darkMode/DarkModeThemeContext"
import {
  GridWithPadding,
  Icon,
  OptionsContainer,
  StyledBackIcon,
  Text,
  TopBar
} from "../styles/styled"

const Settings = () => {
  const { i18n, t } = useTranslation()

  const onChangeLang = (e) => {
    const lang_code = e.target.value
    chrome.storage.local.set({ language: lang_code }, () => {
      i18n.changeLanguage(lang_code)
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
          <Link to={`/`}>
            <StyledBackIcon />
          </Link>
          <Grid container sx={{ alignItems: "center" }}>
            <GridWithPadding item xs={1}>
              <Icon
                src={chrome.runtime.getURL("icons/luna-creciente128.png")}
              />
            </GridWithPadding>
            <GridWithPadding item xs={9}>
              <Text>{t("darkMode")}</Text>
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
              <Text>{t("floatingButton")}</Text>
            </GridWithPadding>
            <GridWithPadding item xs={2} sx={{ textAlign: "right" }}>
              <SwitchFloatingButton />
            </GridWithPadding>
            <GridWithPadding item xs={1}>
              <Icon src={chrome.runtime.getURL("icons/accesibility.png")} />
            </GridWithPadding>
            <GridWithPadding item xs={8}>
              <Text>{t("changeColorsForAccesibility")}</Text>
            </GridWithPadding>
            <GridWithPadding item xs={3} sx={{ textAlign: "right" }}>
              <Select
                size="small"
                autoWidth
                value={daltonicModeTheme.daltonicMode}
                onChange={daltonicModeTheme.changeDaltonicMode}
                sx={{ backgroundColor: "#FFF" }}>
                <MenuItem value={0}>{t("none")}</MenuItem>
                <MenuItem value={1}>{t("deuteranopia")}</MenuItem>
                <MenuItem value={2}>{t("protanopia")}</MenuItem>
                <MenuItem value={3}>{t("tritanopia")}</MenuItem>
              </Select>
            </GridWithPadding>
            <GridWithPadding item xs={1}>
              <Icon src={chrome.runtime.getURL("icons/idioma.png")} />
            </GridWithPadding>
            <GridWithPadding item xs={8}>
              <Text>{t("changeLanguage")}</Text>
            </GridWithPadding>
            <GridWithPadding item xs={3} sx={{ textAlign: "right" }}>
              <Select
                size="small"
                autoWidth
                defaultValue={i18n.language}
                onChange={onChangeLang}
                sx={{ backgroundColor: "#FFF" }}>
                <MenuItem value="es">{t("spanish")}</MenuItem>
                <MenuItem value="en">{t("english")}</MenuItem>
              </Select>
            </GridWithPadding>
          </Grid>
        </OptionsContainer>
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default Settings
