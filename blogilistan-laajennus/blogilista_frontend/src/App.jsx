import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route, useMatch } from "react-router-dom"

import { initializeBlogs } from "./reducers/blogReducer"
import { initializeUser } from "./reducers/loginReducer"
import { initializeUsers } from "./reducers/usersReducer"

import ShowBlogs from "./components/ShowBlogs"
import BlogInfo from "./components/BlogInfo"
import LoginForm from "./components/LoginForm"
import Users from "./components/Users"
import User from "./components/User"
import NavMenu from "./components/NavMenu"

import "./index.css"

const App = () => {
  const login = useSelector(state => state.login)
  const users = useSelector(state => state.users)
  const blogs = useSelector(state => state.blogs)

  const dispatch = useDispatch()
  console.log(blogs)

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initializeUser())
    dispatch(initializeUsers())
  }, [])

  const userMatch = useMatch("/users/:id")
  const user = userMatch
    ? users.find(user => user.id === userMatch.params.id)
    : null

  const blogMatch = useMatch("/blogs/:id")
  const blog = blogMatch
    ? blogs.find(blog => blog.id === blogMatch.params.id)
    : null

  return (
    <><NavMenu></NavMenu>
      <Routes>
        <Route path='/users/:id' element={<User user={user}/>}/>
        <Route path='/blogs/:id' element={<BlogInfo blog={blog}/>}/>
        <Route path='/' element={!login ? <LoginForm /> : <ShowBlogs /> }/>
        <Route path='/users' element={<Users />}/>
      </Routes>
    </>
  )
}

export default App