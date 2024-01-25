import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { initializeBlogs } from "./reducers/blogReducer"
import { initializeUser } from "./reducers/loginReducer"

import ShowBlogs from "./components/ShowBlogs"
import LoginForm from "./components/LoginForm"

import "./index.css"

const App = () => {
  const login = useSelector(state => state.login)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initializeUser())
  }, [])

  return <>{!login ? <LoginForm /> : <ShowBlogs />}</>
}

export default App