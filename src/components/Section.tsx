import { Grid } from "@mui/material"
import React, { useEffect, useState } from "react"

import LinkPreview from "./LinkPreview"

const Section = (props) => {
  const [content, setContent] = useState([])
  useEffect(() => {
    setContent(props.content)
  }, [content])

  return (
    <Grid container justifyContent="center" spacing={5} rowSpacing={5}>
      {content.map((link) => (
        <>
          <Grid item xs={content.length === 1 ? 11 : 6}>
            <LinkPreview link={link} />
          </Grid>
        </>
      ))}
    </Grid>
  )
}

export default Section
