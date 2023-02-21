import React from "react"
import { createRoot } from "react-dom/client"

import Button from "./components/Button"

window.addEventListener("mouseup", () => {
  if (
    window.getSelection().toString() !== "" &&
    !document.getElementById("button-container")
  ) {
    //Si se hace "mouseup", hay algo seleccionado y además no se existe el botón, se crea el botón
    show(Button)
    console.log("Botón mostrado")
  } else if (window.getSelection().toString() === "") {//Si se hace "mouseup", no hay nada algo seleccionado y además no se existe el botón, se crea el botón
    document.getElementById("button-container").remove()
    console.log("Botón eliminado")
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
  root.render(<DOMelement />)
}
