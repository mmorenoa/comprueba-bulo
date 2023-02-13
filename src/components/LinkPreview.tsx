import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Container, LinkContainer, LinkImage, LinkTitle } from "./styles/styled"

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
      <LinkImage
        src="local-responses/Publicacio--n-falsa-mascarillas.png"
      />
      <CardContent>
        <LinkTitle>{props.linkData.name}</LinkTitle>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.linkData.url} target="_blank">
          Ir a la noticia
        </Button>
      </CardActions>
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
