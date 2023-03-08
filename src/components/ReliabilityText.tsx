import React, { useMemo } from "react"
import { ThemeProvider } from "styled-components"

import { Text, TextContainer, TopBar } from "../styles/styled"
import { greenReliability, orangeReliability, redReliability, yellowReliability } from "../styles/accesibilityMode/accesibilityModeThemeColors"
import { useDarkModeTheme } from "../styles/darkMode/DarkModeThemeContext"
import { useDaltonicModeTheme } from "../styles/accesibilityMode/AccesibilityThemeContext"


const ReliabilityText = ({avg}: ReliabilityTextProps) => {
  const HIGH_THRESHOLD = 0.1
  const MID_HIDH_THRESHOLD = 0.44
  const MID_THRESHOLD = 0.75

  const darkmode = useDarkModeTheme()
  const daltonicMode = useDaltonicModeTheme()

  const reliability = useMemo(() => {
    if (avg < HIGH_THRESHOLD) return "Muy alta"
    if (avg >= HIGH_THRESHOLD && avg < MID_HIDH_THRESHOLD)
      return "Media - alta"
    if (avg >= MID_HIDH_THRESHOLD && avg < MID_THRESHOLD)
      return "Media"
    return "Baja"
  }, [avg])

  const reliabilityText = useMemo(() => {
    if (avg > 0) {
      if (avg < HIGH_THRESHOLD) return "¡Información verídica!"
      if (avg >= HIGH_THRESHOLD && avg < MID_HIDH_THRESHOLD)
        return "¡Información dudosa!"
      if (avg >= MID_HIDH_THRESHOLD && avg < MID_THRESHOLD)
        return "¡Información no muy fiable!"
      return "¡Información falsa!"
    } else {
      return
    }
  }, [avg])

  const color = useMemo(() => {
    if (avg < HIGH_THRESHOLD) return greenReliability
    if (avg >= HIGH_THRESHOLD && avg < MID_HIDH_THRESHOLD)
      return yellowReliability
    if (avg >= MID_HIDH_THRESHOLD && avg < MID_THRESHOLD)
      return orangeReliability
    return redReliability
  }, [avg, darkmode, daltonicMode])
  
  return (
    <ThemeProvider theme={darkmode}>
      <ThemeProvider theme={daltonicMode}>
      {avg > 0 ? (
        <>
          <TopBar color={color} />
          <TextContainer>
            <Text>{reliabilityText}</Text>
            <div>
              <Text weight="400">Fiabilidad: </Text>
              <Text color={color}>{reliability}</Text>
            </div>
          </TextContainer>
        </>
      ) : (
        <>
          <TopBar />
          <TextContainer>
            <Text>Requiere verificación manual</Text>
          </TextContainer>
        </>
      )}
      </ThemeProvider>
    </ThemeProvider>
  )
}

interface ReliabilityTextProps {
  avg: number
}

export default ReliabilityText
