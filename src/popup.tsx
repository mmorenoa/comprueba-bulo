/* chrome global */

import React, { useEffect, useMemo, useState } from "react"

import { Colors } from "~src/components/colors"

import Section from "./components/Section"
import {
  Container,
  Spinner,
  Text,
  TextContainer,
  TopBar
} from "./components/styled"

function IndexPopup() {
  const HIGH_THRESHOLD = 0.1
  const MID_HIDH_THRESHOLD = 0.44
  const MID_THRESHOLD = 0.75

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
        chrome.runtime.getURL("local-responses/respuesta mascarillas.json"),
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
      setFactCheckers(["Requiere verificación manual"])
    }
    console.log(avg)
    console.log(factCheckers)
  }

  const reliability = useMemo(() => {
    if (avg < HIGH_THRESHOLD) return "Muy alta"
    if (avg >= HIGH_THRESHOLD && avg < MID_HIDH_THRESHOLD) return "Media - alta"
    if (avg >= MID_HIDH_THRESHOLD && avg < MID_THRESHOLD) return "Media"
    return "Baja"
  }, [avg])

  const reliabilityText = useMemo(() => {
    if (avg < HIGH_THRESHOLD) return "¡Información verídica!"
    if (avg >= HIGH_THRESHOLD && avg < MID_HIDH_THRESHOLD)
      return "¡Información dudosa!"
    if (avg >= MID_HIDH_THRESHOLD && avg < MID_THRESHOLD)
      return "¡Información no muy fiable!"
    return "¡Información falsa!"
  }, [avg])

  const color = useMemo(() => {
    if (avg < HIGH_THRESHOLD) return Colors.Green
    if (avg >= HIGH_THRESHOLD && avg < MID_HIDH_THRESHOLD) return Colors.Yellow
    if (avg >= MID_HIDH_THRESHOLD && avg < MID_THRESHOLD) return Colors.Orange
    return Colors.Red
  }, [avg])

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <TopBar color={color} />
          <TextContainer>
            <Text>{reliabilityText}</Text>
            <div>
              <Text weight="400">Fiabilidad: </Text>
              <Text color={color}>{reliability}</Text>
            </div>
          </TextContainer>
          <Section content={factCheckers} />
        </>
      )}
    </Container>
  )
}

export default IndexPopup
