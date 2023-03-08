import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

export const DarkModeThemeContext = createContext({
  darkMode: null,
  toggleDarkMode: () => {
    // do nothing
  }
})

export const useDarkModeTheme = () => useContext(DarkModeThemeContext)

export const DarkModeThemeManager = ({
  children
}: DarkModeThemeManagerProps) => {
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
    toggleThemeOnBackground(darkMode)
  }

  const toggleThemeOnBackground = (darkModeParam: boolean) => {
    chrome.storage.local.set({ darkMode: !darkModeParam }, () => {
      setDarkMode(!darkModeParam)
    })
  }

  return (
    <DarkModeThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode
      }}>
      {children}
    </DarkModeThemeContext.Provider>
  )
}

interface DarkModeThemeManagerProps {
  children: ReactNode
}
