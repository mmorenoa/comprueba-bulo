import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid
} from "@mui/material"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

import {
  Container,
  LinkContainer,
  LinkDate,
  LinkDateNameContainer,
  LinkImage,
  LinkSubtitle,
  LinkTitle,
  LinkTitleContainer
} from "./styles/styled"

const LinkPreview = (props) => {
  /*const [title, setTitle] = useState(undefined)
  const [image, setImage] = useState(undefined)

  useEffect(() => {
    fetch(
      "https://api.linkpreview.net?" +
        new URLSearchParams({
          key: "802794e69f6e682b104dd707cf08a9bd",
          q: props.link
        })
    )
      .then((res) => res.json())
      .then((json) => {
        setTitle(json.title)
        setImage(json.image)
      })
  }, [title, image])*/

  return (
    <LinkContainer>
      <LinkImage src="local-responses/Publicacio--n-falsa-mascarillas.png" />
      <Grid container>
        <LinkTitleContainer item xs={12}>
          <LinkTitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </LinkTitle>
        </LinkTitleContainer>
        <LinkDateNameContainer item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <LinkSubtitle>Página web de la noticia</LinkSubtitle>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <LinkSubtitle>Hace 4 días</LinkSubtitle>
            </Grid>
          </Grid>
        </LinkDateNameContainer>
      </Grid>
    </LinkContainer>
  )
}

LinkPreview.propTypes = {
  linkData: PropTypes.object,
  link: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string
}

export default LinkPreview
