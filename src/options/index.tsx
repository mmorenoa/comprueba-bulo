import React from "react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"

import PopupIndex from "../popup/PopupIndex"
import OptionsIndex from "./OptionsIndex"

const router = createMemoryRouter([
  {
    path: "/",
    element: <PopupIndex />
  },
  {
    path: "/options",
    element: <OptionsIndex />
  },
  {
    index: true,
    element: <OptionsIndex />
  }
])

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes
