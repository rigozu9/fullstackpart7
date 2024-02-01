import { useSelector } from "react-redux"
import Header from "./Header"
import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material"

const User = ({ user }) => {
  if (!user) return null
  console.log(user)

  const blogs = useSelector(state => state.blogs.filter(blog => blog.user.id === user.id))

  return (
    <div>
      <Header />
      <h1>{user.name}</h1>
      <h2>Added Blogs</h2>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell>{blog.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default User