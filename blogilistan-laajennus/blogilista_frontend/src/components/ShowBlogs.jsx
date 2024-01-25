import { useDispatch, useSelector } from "react-redux"
import { logout } from "../reducers/loginReducer"
import Blog from "./Blog"
import BlogForm from "./BlogForm"
import Notification from "./Notification"

const ShowBlogs = () => {
  const blogs = useSelector(state => [...state.blogs])
  const login = useSelector(state => state.login)

  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logout())
  }

  return (
    <div>
      <h1>blogs</h1>
      <Notification />
      <p>
        {login.name} logged in
        <button onClick={handleLogOut}>logout</button>
      </p>
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
