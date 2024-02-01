import { useSelector } from "react-redux"
import Blog from "./Blog"
import BlogForm from "./BlogForm"
import Notification from "./Notification"
import Header from "./Header"
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material"

const ShowBlogs = () => {
  const blogs = useSelector(state => [...state.blogs])
  const login = useSelector(state => state.login)

  return (
    <Container>
      <Notification />
      <Header />
      <BlogForm />
      <h2>Blogs</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {blogs
              .sort((a, b) => b.likes - a.likes)
              .map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell>
                    <Blog blog={blog} username={login.username} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ShowBlogs
