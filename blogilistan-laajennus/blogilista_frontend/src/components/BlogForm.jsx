import { useDispatch } from "react-redux"
import { createBlog } from "../reducers/blogReducer"
import { useState, useRef } from "react"
import Togglable from "./Togglable"
import { Table, Form, Button } from "react-bootstrap"

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
      <Form onSubmit={addBlog}>
        <Table>
          <tbody>
            <tr>
              <td>Title:</td>
              <td>
                <input
                  id="title"
                  type="text"
                  placeholder="Title"
                  value={title}
                  name="title"
                  onChange={({ target }) => setTitle(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Author:</td>
              <td>
                <input
                  id="author"
                  type="text"
                  placeholder="Author"
                  value={author}
                  name="author"
                  onChange={({ target }) => setAuthor(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>URL:</td>
              <td>
                <input
                  id="url"
                  type="text"
                  placeholder="URL"
                  value={url}
                  name="url"
                  onChange={({ target }) => setUrl(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Button id="create-button" type="submit">Create</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Form>
    </Togglable>
  )
}

export default BlogForm
