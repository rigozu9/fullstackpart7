import { useDispatch } from "react-redux"
import { createBlog } from "../reducers/blogReducer"
import { useState, useRef } from "react"
import Togglable from "./Togglable"
import { TextField, Button, Grid } from "@mui/material"

const BlogForm = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [url, setUrl] = useState("")

  const dispatch = useDispatch()
  const blogFormRef = useRef()

  const addBlog = async (event) => {
    event.preventDefault()
    blogFormRef.current.toggleVisibility()

    dispatch(createBlog({ title, author, url }))

    setTitle("")
    setAuthor("")
    setUrl("")
  }

  return (
    <Togglable buttonLabel="Create New Blog" cancelLabel="Hide" ref={blogFormRef}>
      <h2>Create New</h2>
      <form onSubmit={addBlog}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="title"
              label="Title"
              variant="outlined"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="author"
              label="Author"
              variant="outlined"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="url"
              label="URL"
              variant="outlined"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button id="create-button" type="submit" variant="contained" color="primary">
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </Togglable>
  )
}

export default BlogForm
