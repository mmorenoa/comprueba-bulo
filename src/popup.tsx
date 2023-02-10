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
  const [entailmentValues, setEntailmentValues] = useState({
    entailmentValuesArr: []
  })
  const [factCheckers, setFactCheckers] = useState({ factCheckersArr: [] })

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
          if (json.Entailment_hoaxes.length > 0) {
            json.Entailment_hoaxes.map((x) => {
              setEntailmentValues({
                entailmentValuesArr: [
                  ...entailmentValues.entailmentValuesArr,
                  x.Entailment_probabilities.Entailment
                ]
              }) // Meto el valor "Entailment" de cada objeto que esté dentro de Entailment_hoaxes en un array.
              setFactCheckers({
                factCheckersArr: [
                  ...factCheckers.factCheckersArr,
                  {
                    name: x.fact_checker_entailment.Organisation,
                    link: x.fact_checker_entailment.Link,
                    date: x.fact_checker_entailment['Factchecking date']
                  }
                ]
              })
            })
          } else {
            setEntailmentValues({ entailmentValuesArr: [0] })
          }
          setAvg(
            entailmentValues.entailmentValuesArr.reduce(
              (previous, current) => (current += previous)
            ) / entailmentValues.entailmentValuesArr.length // Se calcula la media de los valores del array devuelto por la constante entailment.
          )
          console.log(avg)
          console.log(factCheckers)
        })
        .catch((error) => console.log(error))
    })
  }, [avg, factCheckers])

  const isLoading = avg === undefined

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
          <Section content={factCheckers.factCheckersArr} />
        </>
      )}
    </Container>
  )
}

export default IndexPopup
