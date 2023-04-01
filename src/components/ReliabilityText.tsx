import React, { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
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
import { StyledBuildIcon, Text, TextContainer, TopBar } from "../styles/styled"

const ReliabilityText = ({ avg }: ReliabilityTextProps) => {
  const HIGH_THRESHOLD = 0.1
  const MID_HIDH_THRESHOLD = 0.44
  const MID_THRESHOLD = 0.75

  const darkmode = useDarkModeTheme()
  const daltonicMode = useDaltonicModeTheme()
  const { t } = useTranslation()

  const reliability: string = useMemo(() => {
    if (avg < HIGH_THRESHOLD) return t("veryHigh")
    if (avg >= HIGH_THRESHOLD && avg < MID_HIDH_THRESHOLD)
      return t("mediumHigh")
    if (avg >= MID_HIDH_THRESHOLD && avg < MID_THRESHOLD) return t("medium")
    return t("low")
  }, [avg])

  const reliabilityText: string = useMemo(() => {
    if (avg > 0) {
      if (avg < HIGH_THRESHOLD) return t("trueInformation")
      if (avg >= HIGH_THRESHOLD && avg < MID_HIDH_THRESHOLD)
        return t("questionableInformation")
      if (avg >= MID_HIDH_THRESHOLD && avg < MID_THRESHOLD)
        return t("unreliableInformation")
      return t("falseInformation")
    } else {
      return t("requiresManualVerification")
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
        <Link
          to={`/options`}
          onClick={() =>
            chrome.runtime.sendMessage({ action: "resize-window-for-options" })
          }>
          <StyledBuildIcon />
        </Link>
        <TextContainer>
          <Text>{reliabilityText}</Text>
          {avg > 0 ? (
            <>
              <div>
                <Text weight="400">{t("reliability")}: </Text>
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
