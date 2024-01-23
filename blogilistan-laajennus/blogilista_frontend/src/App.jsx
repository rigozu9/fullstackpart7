import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addNotification } from "./reducers/notificationReducer"
import { initializeBlogs } from "./reducers/blogReducer"

import Blog from "./components/Blog"
import BlogForm from "./components/BlogForm"
import LoginForm from "./components/LoginForm"
import Notification from "./components/Notification"

import blogService from "./services/blogs"
import loginService from "./services/login"
import "./index.css"

const App = () => {
  const blogs = useSelector(state => [...state.blogs])

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const showSuccessMsg = (successMsg) =>
    dispatch(addNotification(successMsg, true, 500))

  const showErrorMsg = (ErrorMsg) =>
    dispatch(addNotification(ErrorMsg, false, 500))

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password,
      })

      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user))

      blogService.setToken(user.token)
      setUser(user)
      setUsername("")
      setPassword("")
    } catch ({ response }) {
      showErrorMsg(response.data.error)
    }
  }

  const handleLogOut = () => {
    setUser(null)
    window.localStorage.clear()
  }

  const handleUsername = ({ target }) => {
    setUsername(target.value)
  }

  const handlePassword = ({ target }) => {
    setPassword(target.value)
  }

  const loginForm = () => (
    <LoginForm
      handleLogin={handleLogin}
      username={username}
      password={password}
      handleUsername={handleUsername}
      handlePassword={handlePassword}
    />
  )

  const showBlogs = () => (
    <>
      <h1>blogs</h1>
      <Notification />
      <p>
        {user.name} logged in {}
        <button onClick={handleLogOut}>logout</button>
      </p>
      <BlogForm
        blogs={blogs}
        showSuccessMsg={showSuccessMsg}
      />
      {blogs
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            username={user.username}
          />
        ))}
    </>
  )

  return <>{!user ? loginForm() : showBlogs()}</>
}

export default App
