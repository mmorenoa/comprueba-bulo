/* chrome global */

import CircularProgress from "@mui/material/CircularProgress"
import React, { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"

import { useDaltonicModeTheme } from "~src/styles/accesibilityMode/AccesibilityThemeContext"

import ReliabilityText from "../components/ReliabilityText"
import Section from "../components/Section"
import GlobalStyle from "../styles/GlobalStyle"
import { useDarkModeTheme } from "../styles/darkMode/DarkModeThemeContext"
import { Container } from "../styles/styled"

const Popup = () => {
  const [avg, setAvg] = useState(undefined)
  const [factCheckers, setFactCheckers] = useState([])

  useEffect(() => {
    chrome.storage.local.get("lastText", (data) => {
      /*fetch(
        "http://g1.etsisi.upm.es:8835/fact_checking/entailment?" +
          new URLSearchParams({
            text: data.lastText
          }), {
            mode: 'no-cors'
          }
      )*/
      fetch("local-json-responses/respuesta agua caliente.json")
        .then((response) => response.json())
        .then((json) => {
          manageEntailmentData(json.Entailment_hoaxes)
        })
        .catch((error) => console.log(error))
    })
  }, [avg])

  const manageEntailmentData = (arr) => {
    if (arr.length > 0) {
      if (arr.length === 1) {
        setAvg(arr[0]["Entailment_probabilities"]["Entailment"])
      } else {
        const avgValues = arr.map((obj) => {
          return obj["Entailment_probabilities"]["Entailment"]
        })
        const avgResult =
          avgValues.reduce((previous, current) => (current += previous)) /
          avgValues.length
        setAvg(avgResult)
        chrome.runtime.sendMessage({ action: "resize-window" })
      }
      setFactCheckers(arr)
    } else {
      setAvg(0)
    }
  }

  const isLoading = avg === undefined

  const darkModeTheme = useDarkModeTheme()
  const daltonicModeTheme = useDaltonicModeTheme()

  return (
    <ThemeProvider theme={darkModeTheme}>
      <ThemeProvider theme={daltonicModeTheme}>
        <Container>
          <GlobalStyle />
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <ReliabilityText avg={avg} />
              {avg > 0 ? <Section newsArray={factCheckers} /> : ""}
            </>
          )}
        </Container>
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default Popup
