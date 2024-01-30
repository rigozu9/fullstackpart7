import { useState } from "react"
import { login } from "../reducers/loginReducer"
import { useDispatch } from "react-redux"
import Notification from "./Notification"
import { Table, Form, Button } from "react-bootstrap"

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
    <Form onSubmit={handleLogin}>
      <h2>Log in to Application</h2>
      <Notification />
      <Table>
        <tbody>
          <tr>
            <td>Username:</td>
            <td>
              <input
                id="username"
                type="text"
                value={username}
                name="Username"
                onChange={({ target }) => setUsername(target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input
                id="password"
                type="password"
                value={password}
                name="Password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Button id="login-button" type="submit">Login</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Form>
  )
}

export default LoginForm
