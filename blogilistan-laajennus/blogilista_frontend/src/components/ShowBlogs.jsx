import { useSelector } from "react-redux"
import Blog from "./Blog"
import BlogForm from "./BlogForm"
import Notification from "./Notification"
import Header from "./Header"
import { Table } from "react-bootstrap"

const ShowBlogs = () => {
  const blogs = useSelector(state => [...state.blogs])
  const login = useSelector(state => state.login)

  return (
    <div>
      <Notification />
      <Header />
      <BlogForm />
      <h2>Blogs</h2>
      <Table striped>
        <tbody>
          {blogs
            .sort((a, b) => b.likes - a.likes)
            .map((blog) => (
              <tr key={blog.id}>
                <td>
                  <Blog blog={blog} username={login.username} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ShowBlogs
