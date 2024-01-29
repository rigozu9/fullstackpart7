import { useSelector } from "react-redux"
import Blog from "./Blog"
import BlogForm from "./BlogForm"
import Notification from "./Notification"
import Header from "./Header"

const ShowBlogs = () => {
  const blogs = useSelector(state => [...state.blogs])
  const login = useSelector(state => state.login)

  return (
    <div>
      <Notification />
      <Header />
      <BlogForm />
      {blogs
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            username={login.username}
          />
        ))}
    </div>
  )
}

export default ShowBlogs
