import { Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import { v4 } from "uuid"

import LinkPreview from "./LinkPreview"

const Section = ({ newsArray }: SectionProps) => {
  const [content, setContent] = useState([])

  useEffect(() => {
    makeEntailmentObjects(newsArray)
  }, [])

  const makeEntailmentObjects = (arr) => {
    const factCheckersObjArr = arr.map((item) => {
      if (arr.length > 0) {
        return {
          name: item.fact_checker_entailment.Organisation,
          date: item.fact_checker_entailment["Factchecking date"],
          url: item.fact_checker_entailment.Link
        }
      } else {
        return {
          name: item
        }
      }
    })
    setContent(factCheckersObjArr)
  }

  const listLinkPreviews = content.map((contentData) => (
    <React.Fragment key={v4()}>
      <Grid item xs={12}>
        <LinkPreview link={contentData} />
      </Grid>
    </React.Fragment>
  ))

  return (
    <Grid
      container
      justifyContent="center"
      spacing={5}
      rowSpacing={5}
      maxWidth="xl">
      {listLinkPreviews}
    </Grid>
  )
}

interface SectionProps {
  newsArray: Array<object>
}

export default Section
