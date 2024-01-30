import { useDispatch, useSelector } from "react-redux"
import { logout } from "../reducers/loginReducer"
import { Link } from "react-router-dom"

const NavMenu = () => {
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()
  const handleLogOut = () => dispatch(logout())

  if (!login) return null

  const style = {
    padding: 5,
    background: "lightgrey",
    marginBottom: 5,
  }

  const padding = {
    paddingRight: 5
  }

  return (
    <div style={style}>
      <Link style={padding} to='/'>Blogs</Link>
      <Link style={padding} to='/users'>Users</Link>
      {login &&
      <span>
        {login.name} logged in {}
        <button onClick={handleLogOut}>logout</button>
      </span>}
    </div>
  )
}

export default NavMenu