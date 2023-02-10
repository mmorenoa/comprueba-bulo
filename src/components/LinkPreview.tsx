import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material"
import React, { useEffect, useState } from "react"

const LinkPreview = (props) => {
  /*const [title, setTitle] = useState(undefined)
  const [image, setImage] = useState(undefined)
  const [name, setName] = useState(undefined)
  const [date, setDate] = useState(undefined)
  const [url, setUrl] = useState(undefined)

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
        console.log(json)
        setTitle(json.title)
        setImage(json.image)
        setName(props.name)
        setDate(props.date)
        setUrl(json.url)
      })
  }, [title, image, name, date, url])*/


  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image=/*{image}*/"local-responses/Publicacio--n-falsa-mascarillas.png" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        What is Lorem Ipsum?
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.lipsum.com/">
          Ir a la noticia
        </Button>
      </CardActions>
    </Card>
  )
}

export default LinkPreview
