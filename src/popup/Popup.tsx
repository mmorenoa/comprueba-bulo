/* chrome global */

import React, { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"

import { useTheme } from "~src/components/styles/ThemeContext"

import ReliabilityText from "../components/ReliabilityText"
import Section from "../components/Section"
import GlobalStyle from "../components/styles/GlobalStyle"
import { Container, Spinner } from "../components/styles/styled"

const Popup = () => {
  const [avg, setAvg] = useState(undefined)
  const [factCheckers, setFactCheckers] = useState([])

  useEffect(() => {
    chrome.storage.local.get("lastText", (data) => {
      fetch(
        "http://g1.etsisi.upm.es:8835/fact_checking/entailment?" +
          new URLSearchParams({
            text: data.lastText
          }), {
            mode: 'no-cors'
          }
      )
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
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <ReliabilityText avg={avg} />
            {avg > 0 ? <Section content={factCheckers} /> : ""}
          </>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default Popup
