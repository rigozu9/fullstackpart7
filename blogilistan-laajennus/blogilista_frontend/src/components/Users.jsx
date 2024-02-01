import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Header from "./Header"
import { Table, TableHead, TableBody, TableRow, TableCell, Link as MuiLink } from "@mui/material"

const Users = () => {
  const users = useSelector(state => state.users)

  return (
    <div>
      <Header />
      <h1>Users</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Number of Blogs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>
                <MuiLink component={Link} to={user.id}>{user.name}</MuiLink>
              </TableCell>
              <TableCell>{user.blogs.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Users
