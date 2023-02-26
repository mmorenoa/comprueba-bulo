import PropTypes from "prop-types"
import React, { createContext, useContext, useEffect, useState } from "react"

export const ManageThemeContext = createContext({
  mode: "",
  toggle: () => {}
})

export const useTheme = () => useContext(ManageThemeContext)

export const ThemeManager = ({ children }) => {
  const [themeState, setThemeState] = useState({ mode: "" })

  useEffect(() => {
    initializeTheme()
  }, [])

  const initializeTheme = () => {
    chrome.storage.local.get("themeMode", (data) => {
      setThemeState({ mode: data.themeMode })
      console.log(`${data.themeMode} mode inicializado`)
    })
  }

  const toggleTheme = () => {
    console.log(`Cambiando tema ${themeState.mode}`)
    setThemeState({ mode: themeState.mode === "light" ? "dark" : "light" })
    chrome.storage.local.set({ themeMode: themeState.mode }, () => {
      chrome.storage.local.get("themeMode", (data) => {
        console.log(`Tema cambiado a ${data.themeMode}`)
      })
    })
  }

  return (
    <ManageThemeContext.Provider
      value={{
        mode: themeState.mode,
        toggle: toggleTheme
      }}>
      {children}
    </ManageThemeContext.Provider>
  )
}

ThemeManager.propTypes = {
  children: PropTypes.any
}
