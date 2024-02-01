import { useState } from "react"
import { login } from "../reducers/loginReducer"
import { useDispatch } from "react-redux"
import Notification from "./Notification"
import { Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Button }
  from "@mui/material"

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()
    dispatch(login(username, password))

    setUsername("")
    setPassword("")

  }

  return (
    <Container>
      <h2>Log in to Application</h2>
      <Notification />
      <form onSubmit={handleLogin}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Username:</TableCell>
              <TableCell>
                <TextField
                  id="username"
                  type="text"
                  value={username}
                  label="Username"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Password:</TableCell>
              <TableCell>
                <TextField
                  id="password"
                  type="password"
                  value={password}
                  label="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Button id="login-button" type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </form>
    </Container>
  )
}

export default LoginForm
