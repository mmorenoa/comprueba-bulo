import PropTypes from "prop-types"
import React, { createContext, useContext, useEffect, useState } from "react"

export const ManageThemeContext = createContext({
  darkMode: null,
  toggleDarkMode: () => {}
})

export const useTheme = () => useContext(ManageThemeContext)

export const ThemeManager = ({ children }) => {
  const [darkMode, setDarkMode] = useState(null)

  useEffect(() => {
    initializeTheme()
  }, [])

  const initializeTheme = () => {
    chrome.storage.local.get("darkMode", (data) => {
      setDarkMode(data.darkMode)
      console.log(`Modo oscuro inicializado: ${data.darkMode}`)
    })
  }

  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode)
    toggleThemeOnBackground()
  }

  const toggleThemeOnBackground = () => {
    chrome.storage.local.set({ darkMode: !darkMode }, () => {
      //Se cambia el valor de la variable del background por el valor contrario del estado darkMode
      chrome.storage.local.get("darkMode", (data) => {
        console.log(
          `Modo oscuro: background(${data.darkMode}) state(${darkMode})`
        )
      })
    })
  }

  return (
    <ManageThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode
      }}>
      {children}
    </ManageThemeContext.Provider>
  )
}

ThemeManager.propTypes = {
  children: PropTypes.any
}
