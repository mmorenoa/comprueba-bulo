/* chrome global */
import React, { useEffect, useMemo, useState } from "react"

import { Colors } from "~src/components/colors"

import { Container, Spinner, Text, TopBar } from "./components/styled"

function IndexPopup() {
  const highThreshold = 0.1
  const midHighThreshold = 0.44
  const midThreshold = 0.75

  const [avg, setAvg] = useState(undefined)
  const entailment = []

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
          json.Entailment_hoaxes.length > 0
            ? json.Entailment_hoaxes.map((x) => {
                entailment.push(x.Entailment_probabilities.Entailment) // Meto el valor "Entailment" de cada objeto que esté dentro de Entailment_hoaxes en un array.
              })
            : entailment.push(0) // Si el array Entailment_hoaxes del JSON que me da el servidor está vacío, meto al array de valores entailment un 0.
          setAvg(
            entailment.reduce((previous, current) => (current += previous)) /
              entailment.length // Se calcula la media de los valores del array devuelto por la constante entailment.
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
    </Container>
  )
}

export default IndexPopup
