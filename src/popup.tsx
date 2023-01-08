import React, { useMemo } from "react"

import { Colors } from "~src/components/colors"
import useCheckingData from "~src/components/useCheckingData"

import { Container, Spinner, Text, TopBar } from "./components/styled"

function IndexPopup() {
  const highThreshold = 1;
  const midHighThreshold = 4;
  const midThreshold = 7.5;

  const avg = useCheckingData("")
  const isLoading = avg === undefined

  const reliability = useMemo(() => {
    if (avg < highThreshold) return "Muy alta"
    if (avg >= highThreshold && avg < midHighThreshold) return "Media - alta"
    if (avg >= midHighThreshold && avg < midThreshold) return "Media"
    return "Baja"
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
      <Text>¡Información verídica!</Text>
      <div>
        <Text weight="400">Fiabilidad: </Text>
        <Text color={color}>{reliability}</Text>
      </div>
    </Container>
  )
}

export default IndexPopup
