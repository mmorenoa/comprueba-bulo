import theme from "styled-theming"

import { Colors } from "../colors"

export const backgroundColor = theme("darkMode", {
  false: "#FFF",
  true: theme("daltonicMode", {
    0: Colors.Blue,
    1: Colors.Deuteranomaly.Primary,
    2: Colors.Protanomaly.Primary,
    3: Colors.Tritanomaly.Primary
  })
})

export const linkContainerBackgroundColor = theme("darkMode", {
  false: "#fff",
  true: Colors.DarkMode.LinkContainer
})

export const textColor = theme("darkMode", {
  false: theme("daltonicMode", {
    0: Colors.Blue,
    1: Colors.Deuteranomaly.Primary,
    2: Colors.Protanomaly.Primary,
    3: Colors.Tritanomaly.Primary
  }),
  true: "#FFF"
})

export const secondaryTextColor = theme("darkMode", {
  false: Colors.SecondaryText,
  true: Colors.DarkMode.SecondaryText
})
