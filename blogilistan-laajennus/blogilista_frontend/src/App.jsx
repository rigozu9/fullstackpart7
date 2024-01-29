import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"

import { initializeBlogs } from "./reducers/blogReducer"
import { initializeUser } from "./reducers/loginReducer"
import { initializeUsers } from "./reducers/usersReducer"

import ShowBlogs from "./components/ShowBlogs"
import LoginForm from "./components/LoginForm"
import Users from "./components/Users"

import "./index.css"

const App = () => {
  const login = useSelector(state => state.login)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initializeUser())
    dispatch(initializeUsers())
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={!login ? <LoginForm /> : <ShowBlogs /> }/>
        <Route path='/users' element={<Users />}/>
      </Routes>
    </>
  )
}

export default App