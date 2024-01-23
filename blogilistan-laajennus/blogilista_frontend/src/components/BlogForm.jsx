import { useDispatch } from "react-redux"
import { createBlog } from "../reducers/blogReducer"
import { useState, useRef } from "react"
import Togglable from "./Togglable"

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
    <Togglable buttonLabel="create new blog" cancelLabel="hide" ref={blogFormRef}>
      <h2>create new</h2>
      <form onSubmit={addBlog}>
        <div>
          title: {}
          <input
            id="title"
            type="text"
            placeholder="title"
            value={title}
            name="title"
            onChange={({ target }) => {
              setTitle(target.value)
            }}
          />
        </div>
        <div>
          author: {}
          <input
            id="author"
            type="text"
            placeholder="author"
            value={author}
            name="author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          url: {}
          <input
            id="url"
            type="text"
            placeholder="url"
            value={url}
            name="url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <div>
          <button id="create-button" type="submit">
            create
          </button>
        </div>
      </form>
    </Togglable>
  )
}

export default BlogForm
