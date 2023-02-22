import React from "react"
import { createRoot } from "react-dom/client"

import AnimatedButton from "./components/AnimatedButton"

window.addEventListener("mouseup", () => {
  if (
    window.getSelection().toString() !== "" &&
    !document.getElementById("button-container")
  ) {
    //Si se hace "mouseup", hay algo seleccionado y además no se existe el botón, se crea el botón
    chrome.storage.local.get("floatingButton").then((buttonState) => {
      if(buttonState.floatingButton === "enabled") {
        showButton(AnimatedButton)
        console.log("Botón mostrado")
      }
    })
  } else if (
    window.getSelection().toString() === "" &&
    document.getElementById("button-container")
  ) {
    //Si se hace "mouseup", no hay nada algo seleccionado y además no se existe el botón, se crea el botón
    document.getElementById("button-container").remove()
    console.log("Botón eliminado")
  }
})

const showButton = (Element) => {
  const div = document.createElement("div")
  div.setAttribute("id", "button-container")

  // Agrega aquí la clase de estilo y otros atributos necesarios para el botón
  div.style.position = "absolute"
  const range = window.getSelection().getRangeAt(0) // Obtiene el rango de la selección
  const rect = range.getBoundingClientRect() // Obtiene las coordenadas del rango en relación al viewport
  const scrollX = window.pageXOffset || document.documentElement.scrollLeft // Obtiene el desplazamiento horizontal de la página
  const scrollY = window.pageYOffset || document.documentElement.scrollTop // Obtiene el desplazamiento vertical de la página
  const posX = rect.left + scrollX // Obtiene la posición horizontal de la selección en relación a la página
  const posY = rect.top + scrollY // Obtiene la posición vertical de la selección en relación a la página
  div.style.left = posX + "px"
  div.style.top = posY+20 + "px"
  document.body.appendChild(div)
  const root = createRoot(div)
  root.render(<Element />)
}
