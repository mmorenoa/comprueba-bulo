import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import PopupIndex from "../popup/PopupIndex"
import OptionsIndex from "./OptionsIndex"

const router = createBrowserRouter([
  {
    index: true,
    path: "/options.html",
    element: <OptionsIndex />
  },
  {
    path: "/popup.html",
    element: <PopupIndex />
  }
])

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes
