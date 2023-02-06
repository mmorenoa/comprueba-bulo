/* chrome global */
import React, { useEffect, useMemo, useState } from "react"

import { Colors } from "~src/components/colors"


import { Container, Spinner, Text, TopBar } from "./components/styled"

function IndexPopup() {
  const highThreshold = 0.1
  const midHighThreshold = 0.44
  const midThreshold = 0.75

  const [avg, setAvg] = useState(undefined)

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
      fetch(
        chrome.runtime.getURL('local-responses/respuesta mascarillas.json'),
        {
          mode: "no-cors"
        }
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json.Entailment_hoaxes);
          const entailment = json.Entailment_hoaxes.map((x) => {
            return x.Entailment_probabilities.Entailment // Meto el valor "Entailment" de cada objeto que esté dentro de Related_hoaxes en un array.
          })
          setAvg(
            entailment.reduce((previous, current) => (current += previous)) /
              entailment.length
          )
          console.log(`avg: ${avg}`);
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
    if (avg >= highThreshold && avg < midHighThreshold) return "¡Cógelo con pinzas!"
    if (avg >= midHighThreshold && avg < midThreshold) return "¡Mejor no te fíes!"
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
