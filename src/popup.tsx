import React, { useMemo } from "react"

import { Colors } from "~src/components/colors"
import useCheckingData from "~src/components/useCheckingData"

import { Container, Spinner, Text, TopBar } from "./components/styled"

function IndexPopup() {
  const avg = useCheckingData("")
  const isLoading = avg === undefined

  const reliability = useMemo(() => {
    if (avg < 1) return "Muy alta"
    if (avg >= 1 && avg < 4) return "Media - alta"
    if (avg >= 4 && avg < 7.5) return "Media"
    return "Baja"
  }, [avg])

  const color = useMemo(() => {
    if (avg < 1) return Colors.Green
    if (avg >= 1 && avg < 4) return Colors.Yellow
    if (avg >= 4 && avg < 7.5) return Colors.Orange
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
