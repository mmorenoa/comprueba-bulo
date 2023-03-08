import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

export const DaltonicModeThemeContext = createContext({
  daltonicMode: 0,
  changeDaltonicMode: (e) => {}
})

export const useDaltonicModeTheme = () => useContext(DaltonicModeThemeContext)

export const DaltonicModeThemeManager = ({
  children
}: DarkModeThemeManagerProps) => {
  const [daltonicMode, setDaltonicMode] = useState(0)

  useEffect(() => {
    initializeTheme()
  }, [])

  const initializeTheme = () => {
    chrome.storage.local.get("daltonicMode", (data) => {
      setDaltonicMode(data.daltonicMode)
      console.log(`Modo daltonico inicializado: ${data.daltonicMode}`)
    })
  }

  const changeDaltonicMode = (e) => {
    setDaltonicMode(e.target.value)
    toggleThemeOnBackground()
  }

  const toggleThemeOnBackground = () => {
    chrome.storage.local.set({ daltonicMode: daltonicMode }, () => {
      console.log("Tema de accesibilidad cambiado.")
    })
  }

  return (
    <DaltonicModeThemeContext.Provider
      value={{
        daltonicMode,
        changeDaltonicMode
      }}>
      {children}
    </DaltonicModeThemeContext.Provider>
  )
}
interface DarkModeThemeManagerProps {
  children: ReactNode
}
