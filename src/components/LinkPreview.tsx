import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

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
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="local-responses/Publicacio--n-falsa-mascarillas.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.linkData.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.linkData.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.linkData.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.linkData.url} target="_blank">
          Ir a la noticia
        </Button>
      </CardActions>
    </Card>
  )
}

LinkPreview.propTypes = {
  linkData: PropTypes.object,
  link: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string
}

export default LinkPreview
