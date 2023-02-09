import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material"
import React, { useState } from "react"

const LinkPreview = (props) => {
  const [title, setTitle] = useState(undefined)
  const [image, setImage] = useState(undefined)
  const [description, setDescription] = useState(undefined)
  const [url, setUrl] = useState(undefined)

  fetch(
    "https://api.linkpreview.net?" +
      new URLSearchParams({
        key: "802794e69f6e682b104dd707cf08a9bd",
        q: props.link
      })
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      setTitle(json.title)
      setImage(json.image)
      setDescription(json.description)
      setUrl(json.url)
    })

  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={url}>
          Ir a la noticia
        </Button>
      </CardActions>
    </Card>
  )
}

export default LinkPreview
