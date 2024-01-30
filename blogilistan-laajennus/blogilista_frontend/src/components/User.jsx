import { useSelector } from "react-redux"
import Header from "./Header"
import { Table } from "react-bootstrap"

const User = ({ user }) => {
  if (!user) return null
  console.log(user)

  const blogs = useSelector(state => state.blogs.filter(blog => blog.user.id === user.id))

  return (
    <div>
      <Header />
      <h1>{user.name}</h1>
      <h2>Added Blogs</h2>

      <Table striped>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default User