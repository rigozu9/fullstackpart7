import { useDispatch } from "react-redux"
import { updateBlog } from "../reducers/blogReducer"
import Header from "./Header"

const BlogInfo = ({ blog }) => {
  const dispatch = useDispatch()
  if (!blog) return null

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

  return (
    <div>
      <Header />
      <div>
        <h1>{blog.title} by {blog.author}</h1>
        <a href={blog.url}>{blog.url}</a>
        <p> Likes: {blog.likes}{" "}
          <button id="like-button" onClick={handleLike}>like</button>
        </p>
        <p>Added by: {blog.user.username}</p>
      </div>
    </div>
  )
}

export default BlogInfo
