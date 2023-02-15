import { Grid, ThemeProvider } from "@mui/material"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

import {
  HyperLink,
  LinkContainer,
  LinkDateNameContainer,
  LinkImage,
  LinkSubtitle,
  LinkTitle,
  LinkTitleContainer
} from "./styles/styled"
import theme from "./styles/theme"

const LinkPreview = (props) => {
  /*const [title, setTitle] = useState(undefined)
  const [image, setImage] = useState(undefined)

  useEffect(() => {
    fetch(
      "https://api.linkpreview.net?" +
        new URLSearchParams({
          key: "802794e69f6e682b104dd707cf08a9bd",
          q: props.linkData.url
        })
    )
      .then((res) => res.json())
      .then((json) => {
        setTitle(json.title)
        setImage(json.image)
      })
  }, [title, image])*/

  return (
    <HyperLink href={props.linkData.url} target="_blank" rel="noreferrer">
      <LinkContainer>
        <LinkImage src="local-responses/Publicacio--n-falsa-mascarillas.png" />
        <ThemeProvider theme={theme}>
          <Grid container>
            <LinkTitleContainer item xs={12}>
              <LinkTitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </LinkTitle>
            </LinkTitleContainer>
            <LinkDateNameContainer item xs={12}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <LinkSubtitle>{props.linkData.name}</LinkSubtitle>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    textAlign: "right",
                    [theme.breakpoints.only("xs")]: {
                      textAlign: "left",
                      paddingTop: "0.7rem"
                    }
                  }}>
                  <LinkSubtitle>{props.linkData.date}</LinkSubtitle>
                </Grid>
              </Grid>
            </LinkDateNameContainer>
          </Grid>
        </ThemeProvider>
      </LinkContainer>
    </HyperLink>
  )
}

LinkPreview.propTypes = {
  linkData: PropTypes.object,
  url: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string
}

export default LinkPreview
