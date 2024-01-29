import { useDispatch, useSelector } from "react-redux"
import { logout } from "../reducers/loginReducer"

const Header = () => {
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()
  const handleLogOut = () => dispatch(logout())

  if (!login) return null

  return (
    <>
      <h1>blogs</h1>
      <p>
        {login.name} logged in {}
        <button onClick={handleLogOut}>logout</button>
      </p>
    </>
  )
}

export default Header