/* chrome global */

import { Grid } from "@mui/material"
import React, { useEffect, useMemo, useState } from "react"

import { Colors } from "~src/components/colors"

import LinkPreview from "./components/LinkPreview"
import { Container, Spinner, Text, TopBar } from "./components/styled"

function IndexPopup() {
  const highThreshold = 0.1
  const midHighThreshold = 0.44
  const midThreshold = 0.75

  const [avg, setAvg] = useState(undefined)
  const [entailmentValues, setEntailmentValues] = useState([])
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
          const factCheckers = []
          json.Entailment_hoaxes.length > 0
            ? json.Entailment_hoaxes.map((x) => {
                setEntailmentValues([
                  ...entailmentValues,
                  x.Entailment_probabilities.Entailment
                ]) // Meto el valor "Entailment" de cada objeto que esté dentro de Entailment_hoaxes en un array.
                setFactCheckers([
                  ...factCheckers,
                  x.fact_checker_entailment.Link
                ])
              })
            : setEntailmentValues([0]) // Si el array Entailment_hoaxes del JSON que me da el servidor está vacío, meto al array de valores entailment un 0.
          setAvg(
            entailmentValues.reduce(
              (previous, current) => (current += previous)
            ) / entailmentValues.length // Se calcula la media de los valores del array devuelto por la constante entailment.
          )
        })
        .catch((error) => console.log(error))
    })
  }, [avg])

  const isLoading = avg === undefined

  const reliability = useMemo(() => {
    if (avg < highThreshold) return "Muy alta"
    if (avg >= highThreshold && avg < midHighThreshold) return "Media - alta"
    if (avg >= midHighThreshold && avg < midThreshold) return "Media"
    return "Baja"
  }, [avg])

  const reliabilityText = useMemo(() => {
    if (avg < highThreshold) return "¡Información verídica!"
    if (avg >= highThreshold && avg < midHighThreshold)
      return "¡Información dudosa!"
    if (avg >= midHighThreshold && avg < midThreshold)
      return "¡Información no muy fiable!"
    return "¡Información falsa!"
  }, [avg])

  const color = useMemo(() => {
    if (avg < highThreshold) return Colors.Green
    if (avg >= highThreshold && avg < midHighThreshold) return Colors.Yellow
    if (avg >= midHighThreshold && avg < midThreshold) return Colors.Orange
    return Colors.Red
  }, [avg])

  if (isLoading) {
    return (
      <Container>
        <Spinner />
      </Container>
    )
  }

  return (
    <Container>
      <TopBar color={color} />
      <Text>{reliabilityText}</Text>
      <div>
        <Text weight="400">Fiabilidad: </Text>
        <Text color={color}>{reliability}</Text>
      </div>
      <Grid container justifyContent="center" spacing={5} rowSpacing={5}>
        {}
      </Grid>
    </Container>
  )
}

export default IndexPopup
