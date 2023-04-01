import React from "react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"

import OptionsIndex from "../options/OptionsIndex"
import PopupIndex from "./PopupIndex"

const router = createMemoryRouter([
  {
    path: "/",
    element: <PopupIndex />
  },
  {
    path: "/options",
    element: <OptionsIndex />
  }
])

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes
