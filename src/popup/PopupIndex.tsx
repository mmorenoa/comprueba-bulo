import React from "react"

import "../i18n"

import { DaltonicModeThemeManager } from "../styles/accesibilityMode/AccesibilityThemeContext"
import { DarkModeThemeManager } from "../styles/darkMode/DarkModeThemeContext"
import Popup from "./Popup"

const PopupIndex = () => {
  return (
    <DarkModeThemeManager>
      <DaltonicModeThemeManager>
        <Popup />
      </DaltonicModeThemeManager>
    </DarkModeThemeManager>
  )
}

export default PopupIndex
