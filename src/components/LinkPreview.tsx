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

  const getAgeOfNew = (date) => {
    const newDate = new Date(date)
    const todayDate = new Date()

    const age = todayDate.getTime() - newDate.getTime()

    const ageInDays = Math.floor(age / (1000 * 60 * 60 * 24)) // (ms * seg * min * horas)
    const ageInWeeks = Math.floor(age / (1000 * 60 * 60 * 24 * 7)) // (ms * seg * min * hora * semana)
    const ageInMonths = Math.floor(age / (1000 * 60 * 60 * 24 * 7 * 30)) // (ms * seg * min * horas * semana * mes)
    const ageInYears = Math.floor(age / (1000 * 60 * 60 * 24 * 7 * 4 * 365)) // (ms * seg * min * horas * mes * año)

    if (ageInDays > 6) {
      if (ageInWeeks < 4) {
        return `Hace ${ageInWeeks} semana${ageInWeeks == 1 ? "" : "s"}`
      } else {
        if (ageInMonths > 11) {
          return `Hace ${ageInYears} año${ageInYears == 1 ? "" : "s"}`
        } else {
          return `Hace ${ageInMonths} mes${ageInMonths == 1 ? "" : "es"}`
        }
      }
    } else {
      return `Hace ${ageInDays} día${ageInDays == 1 ? "" : "s"}`
    }
  }

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
                  <LinkSubtitle>
                    {getAgeOfNew(props.linkData.date)}
                  </LinkSubtitle>
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
