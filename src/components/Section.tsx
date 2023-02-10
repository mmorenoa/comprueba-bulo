import { Grid } from "@mui/material"
import React, { useEffect, useState } from "react"

import LinkPreview from "./LinkPreview"

const Section = (props) => {
  const [content, setContent] = useState([])
  useEffect(() => {
    setContent(props.content)
  }, [content])

  const listLinkPreviews = content.map((props) => (
    <>
      <Grid item>
        <LinkPreview linkData={props} />
      </Grid>
    </>
  ))

  return (
    <Grid container justifyContent="center" spacing={5} rowSpacing={5}>
      {listLinkPreviews}
    </Grid>
  )
}

export default Section
