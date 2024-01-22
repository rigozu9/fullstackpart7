import Notification from "./Notification"

const LoginForm = ({
  handleLogin,
  username,
  password,
  handleUsername,
  handlePassword,
}) => {
  return (
    <form onSubmit={handleLogin}>
      <h2>log in to application</h2>
      <Notification />
      <div>
        username {}
        <input
          id="username"
          type="text"
          value={username}
          name="Username"
          onChange={handleUsername}
        />
      </div>
      <div>
        password {}
        <input
          id="password"
          type="password"
          value={password}
          name="Password"
          onChange={handlePassword}
        />
      </div>
      <button id="login-button" type="submit">
        login
      </button>
    </form>
  )
}

export default LoginForm
