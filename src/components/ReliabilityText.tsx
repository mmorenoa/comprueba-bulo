import PropTypes from "prop-types"
import React, { useMemo } from "react"

import { Colors } from "./styles/colors"
import { Text, TextContainer, TopBar } from "./styles/styled"

const ReliabilityText = (props) => {
  const HIGH_THRESHOLD = 0.1
  const MID_HIDH_THRESHOLD = 0.44
  const MID_THRESHOLD = 0.75

  const reliability = useMemo(() => {
    if (props.avg < HIGH_THRESHOLD) return "Muy alta"
    if (props.avg >= HIGH_THRESHOLD && props.avg < MID_HIDH_THRESHOLD)
      return "Media - alta"
    if (props.avg >= MID_HIDH_THRESHOLD && props.avg < MID_THRESHOLD)
      return "Media"
    return "Baja"
  }, [props.avg])

  const reliabilityText = useMemo(() => {
    if (props.avg > 0) {
      if (props.avg < HIGH_THRESHOLD) return "¡Información verídica!"
      if (props.avg >= HIGH_THRESHOLD && props.avg < MID_HIDH_THRESHOLD)
        return "¡Información dudosa!"
      if (props.avg >= MID_HIDH_THRESHOLD && props.avg < MID_THRESHOLD)
        return "¡Información no muy fiable!"
      return "¡Información falsa!"
    } else {
      return
    }
  }, [props.avg])

  const color = useMemo(() => {
    if (props.avg < HIGH_THRESHOLD) return Colors.Green
    if (props.avg >= HIGH_THRESHOLD && props.avg < MID_HIDH_THRESHOLD)
      return Colors.Yellow
    if (props.avg >= MID_HIDH_THRESHOLD && props.avg < MID_THRESHOLD)
      return Colors.Orange
    return Colors.Red
  }, [props.avg])

  return (
    <div>
      {props.avg > 0 ? (
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
    </div>
  )
}

ReliabilityText.propTypes = {
  avg: PropTypes.number
}

export default ReliabilityText
