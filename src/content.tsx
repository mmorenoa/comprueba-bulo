import React from "react"
import { createRoot } from "react-dom/client"

import Button from "./components/Button"
import IndexPopup from "./popup"

window.addEventListener("mouseup", () => {
  if (document.getElementById("button-container") && document.getElementById("button-popup").onmouseenter ) {
    //Si se hace "mouseup" y ya está mostrando el botón, se elimina el botón
    document.getElementById("button-container").remove()
    console.log("Botón eliminado")
  } else {
    if (
      window.getSelection().toString() !== "" &&
      !document.getElementById("button-container")
    ) {
      //Si se hace "mouseup", hay algo seleccionado y además no se muestra el botón, se crea el botón
      show(Button)
      console.log("Botón mostrado")
    }
  }
})

const show = (element) => {
  const div = document.createElement("div")
  div.setAttribute("id", "button-container")

  // Agrega aquí la clase de estilo y otros atributos necesarios para el botón
  div.style.position = "absolute"
  const seleccion = window.getSelection().getRangeAt(0)
  const coordenadas = seleccion.getBoundingClientRect()
  div.style.left = coordenadas.left + "px"
  div.style.top = coordenadas.bottom + "px"

  document.body.appendChild(div)
  const root = createRoot(div)
  const DOMelement = element
  root.render(<DOMelement/>)
}
