import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

export const DaltonicModeThemeContext = createContext({
  daltonicMode: 0,
  changeDaltonicMode: (e) => {
    // do nothing
  }
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
    })
  }

  const changeDaltonicMode = (e) => {
    toggleThemeOnBackground(e.target.value)
  }

  const toggleThemeOnBackground = (daltonic: number) => {
    chrome.storage.local.set({ daltonicMode: daltonic }, () => {
      setDaltonicMode(daltonic)
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
