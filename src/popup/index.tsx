import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import OptionsIndex from "../options/OptionsIndex"
import PopupIndex from "./PopupIndex"

const router = createBrowserRouter([
  {
    path: "/popup.html",
    element: <PopupIndex />
  },
  {
    path: "/options.html",
    element: <OptionsIndex />
  }
])

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes
