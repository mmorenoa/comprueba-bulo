/* chrome global */

import React, { useEffect, useState } from "react"

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
        chrome.runtime.getURL("local-responses/respuesta test antigenos.json"),
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

  const isLoading = avg === undefined

  const manageEntailmentData = (arr) => {
    if (arr.length > 0) {
      const avgResult =
        arr.reduce(
          (previous, current) =>
            (current.Entailment_probabilities.Entailment +=
              previous.Entailment_probabilities.Entailment)
        ) / arr.length
      setAvg(avgResult)
      setFactCheckers(arr)
    } else {
      setAvg(0)
    }
    console.log(avg)
    console.log(factCheckers)
  }

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
