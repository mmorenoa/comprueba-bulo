import BuildIcon from "@mui/icons-material/Build"
import React, { useMemo } from "react"
import { ThemeProvider } from "styled-components"

import { useDaltonicModeTheme } from "../styles/accesibilityMode/AccesibilityThemeContext"
import {
  greenReliability,
  orangeReliability,
  redReliability,
  yellowReliability
} from "../styles/accesibilityMode/accesibilityModeThemeColors"
import { useDarkModeTheme } from "../styles/darkMode/DarkModeThemeContext"
import { textColor } from "../styles/darkMode/darkModeThemeColors"
import {
  IconInLinkCircle,
  StyledBuildIcon,
  Text,
  TextContainer,
  TopBar
} from "../styles/styled"
import LinkCircle from "./Link"
import Link from "./Link"

const ReliabilityText = ({ avg }: ReliabilityTextProps) => {
  const HIGH_THRESHOLD = 0.1
  const MID_HIDH_THRESHOLD = 0.44
  const MID_THRESHOLD = 0.75

  const darkmode = useDarkModeTheme()
  const daltonicMode = useDaltonicModeTheme()

  const reliability: string = useMemo(() => {
    if (avg < HIGH_THRESHOLD) return "Muy alta"
    if (avg >= HIGH_THRESHOLD && avg < MID_HIDH_THRESHOLD) return "Media - alta"
    if (avg >= MID_HIDH_THRESHOLD && avg < MID_THRESHOLD) return "Media"
    return "Baja"
  }, [avg])

  const reliabilityText: string = useMemo(() => {
    if (avg > 0) {
      if (avg < HIGH_THRESHOLD) return "¡Información verídica!"
      if (avg >= HIGH_THRESHOLD && avg < MID_HIDH_THRESHOLD)
        return "¡Información dudosa!"
      if (avg >= MID_HIDH_THRESHOLD && avg < MID_THRESHOLD)
        return "¡Información no muy fiable!"
      return "¡Información falsa!"
    } else {
      return "Requiere verificación manual"
    }
  }, [avg])

  const color: string = useMemo(() => {
    if (avg > 0) {
      if (avg < HIGH_THRESHOLD) return greenReliability
      if (avg >= HIGH_THRESHOLD && avg < MID_HIDH_THRESHOLD)
        return yellowReliability
      if (avg >= MID_HIDH_THRESHOLD && avg < MID_THRESHOLD)
        return orangeReliability
      return redReliability
    } else {
      return textColor
    }
  }, [avg, darkmode, daltonicMode])

  return (
    <ThemeProvider theme={darkmode}>
      <ThemeProvider theme={daltonicMode}>
        <TopBar color={color} />
        <Link to="options.html">
          <StyledBuildIcon />
        </Link>
        <TextContainer>
          <Text>{reliabilityText}</Text>
          {avg > 0 ? (
            <>
              <div>
                <Text weight="400">Fiabilidad: </Text>
                <Text color={color}>{reliability}</Text>
              </div>
            </>
          ) : (
            ""
          )}
        </TextContainer>
      </ThemeProvider>
    </ThemeProvider>
  )
}

interface ReliabilityTextProps {
  avg: number
}

export default ReliabilityText
