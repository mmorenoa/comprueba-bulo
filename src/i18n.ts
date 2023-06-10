/* global chrome */
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

chrome.storage.local.get("language", (data) => {
  i18n.use(initReactI18next).init({
    lng: data.language,
    fallbackLng: data.language,
    interpolation: {
      escapeValue: false
    },
    resources: {
      es: {
        translation: {
          verifyText: "Verificar texto",
          trueInformation: "¡Información verídica!",
          questionableInformation: "¡Información dudosa!",
          unreliableInformation: "¡Información no muy fiable!",
          falseInformation: "¡Información falsa!",
          requiresManualVerification: "Requiere verificación manual",
          reliability: "Fiabilidad",
          veryHigh: "Muy alta",
          mediumHigh: "Media - alta",
          medium: "Media",
          low: "Baja",
          darkMode: "Modo oscuro",
          floatingButton: "Botón flotante",
          changeColorsForAccesibility: "Cambiar colores para accesibilidad",
          none: "Ninguno",
          deuteranopia: "Deuteranopía",
          protanopia: "Protanopía",
          tritanopia: "Tritanopía",
          changeLanguage: "Cambiar idioma",
          spanish: "Español",
          english: "Inglés"
        }
      },
      en: {
        translation: {
          verifyText: "Verify text",
          trueInformation: "True information!",
          questionableInformation: "Questionable information!",
          unreliableInformation: "Unreliable information!",
          falseInformation: "False information!",
          requiresManualVerification: "Requires manual verification",
          veryHigh: "Very high",
          mediumHigh: "Medium - high",
          medium: "Medium",
          low: "Low",
          reliability: "Reliability",
          darkMode: "Dark mode",
          floatingButton: "Floating button",
          changeColorsForAccesibility: "Change colors for accesibility",
          none: "None",
          deuteranopia: "Deuteranopia",
          protanopia: "Protanopia",
          tritanopia: "Tritanopia",
          changeLanguage: "Change language",
          spanish: "Spanish",
          english: "English"
        }
      }
    }
  })
})

export default i18n
