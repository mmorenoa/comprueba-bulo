/* chrome global */

import React, { useEffect, useState } from "react"

import { SendMessageToBackground } from "./background/SendMessageToBackground"
import ReliabilityText from "./components/ReliabilityText"
import Section from "./components/Section"
import { Container, Spinner } from "./components/styles/styled"

function IndexPopup() {
  const [avg, setAvg] = useState(undefined)
  const [factCheckers, setFactCheckers] = useState([])

  useEffect(() => {
    chrome.storage.local.get("lastText", (data) => {
      /*fetch(
        "http://g1.etsisi.upm.es:8835/fact_checking/entailment" +
          new URLSearchParams({
            text: data.lastText
          }), {
            mode: 'no-cors'
          }
      )*/
      fetch(
        chrome.runtime.getURL("local-responses/respuesta clima calido.json"),
        {
          mode: "no-cors"
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
      }
      setFactCheckers(arr)
      SendMessageToBackground("resizeWindowWithNews")
    } else {
      setAvg(0)
      SendMessageToBackground("resizeWindowWithoutNews")
    }
  }

  const isLoading = avg === undefined

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ReliabilityText avg={avg} />
          {avg > 0 ? <Section content={factCheckers} /> : ""}
        </>
      )}
    </Container>
  )
}

export default IndexPopup
