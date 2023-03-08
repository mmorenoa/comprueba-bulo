import theme from "styled-theming"

import { Colors } from "../colors"

export const greenReliability = theme("daltonicMode", {
  0: Colors.Green,
  1: Colors.Deuteranomaly.Green,
  2: Colors.Protanomaly.Green,
  3: Colors.Tritanomaly.Green
})

export const yellowReliability = theme("daltonicMode", {
  0: Colors.Yellow,
  1: Colors.Deuteranomaly.Yellow,
  2: Colors.Protanomaly.Yellow,
  3: Colors.Tritanomaly.Yellow
})

export const orangeReliability = theme("daltonicMode", {
  0: Colors.Orange,
  1: Colors.Deuteranomaly.Orange,
  2: Colors.Protanomaly.Orange,
  3: Colors.Tritanomaly.Orange
})

export const redReliability = theme("daltonicMode", {
  0: Colors.Red,
  1: Colors.Deuteranomaly.Red,
  2: Colors.Protanomaly.Red,
  3: Colors.Tritanomaly.Red
})
