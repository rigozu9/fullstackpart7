import React from "react"
import Togglable from "./Togglable"
import { useDispatch } from "react-redux"
import { updateBlog, removeBlog } from "../reducers/blogReducer"

const Blog = ({ blog, username }) => {
  const dispatch = useDispatch()

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  }

  const handleLike = () => {
    const blogToUpdate = {
      id: blog.id,
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
      user: blog.user.id,
    }
    dispatch(updateBlog(blogToUpdate))
  }

  const handleDelete = () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      dispatch(removeBlog(blog.id))
    }
  }

  return (
    <div>
      <div className="blog" style={blogStyle}>
        <div>
          {blog.title} by {blog.author}
          <Togglable buttonLabel="View More" cancelLabel="Hide">
            <div>
              <p>
                <a href="">{blog.url}</a>
              </p>
              <p>
                Likes: {blog.likes}{" "}
                <button id="like-button" onClick={handleLike}>
                  like
                </button>
              </p>
              <p>Added by: {blog.user.username}</p>
              {username === blog.user.username && (
                <button onClick={handleDelete}>REMOVE</button>
              )}
            </div>
          </Togglable>
        </div>
      </div>
    </div>
  )
}

export default Blog
