import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route, useMatch } from "react-router-dom"

import { initializeBlogs } from "./reducers/blogReducer"
import { initializeUser } from "./reducers/loginReducer"
import { initializeUsers } from "./reducers/usersReducer"

import ShowBlogs from "./components/ShowBlogs"
import LoginForm from "./components/LoginForm"
import Users from "./components/Users"
import User from "./components/User"

import "./index.css"

const App = () => {
  const login = useSelector(state => state.login)
  const users = useSelector(state => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initializeUser())
    dispatch(initializeUsers())
  }, [])

  const match = useMatch("/users/:id")
  const user = match
    ? users.find(user => user.id === match.params.id)
    : null

  return (
    <>
      <Routes>
        <Route path='/users/:id' element={<User user={user}/>}/>
        <Route path='/' element={!login ? <LoginForm /> : <ShowBlogs /> }/>
        <Route path='/users' element={<Users />}/>
      </Routes>
    </>
  )
}

export default App