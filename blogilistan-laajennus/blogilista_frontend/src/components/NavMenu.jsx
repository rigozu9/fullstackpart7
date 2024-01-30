import { useDispatch, useSelector } from "react-redux"
import { logout } from "../reducers/loginReducer"
import { Link } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"

const NavMenu = () => {
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()
  const handleLogOut = () => dispatch(logout())

  if (!login) return null

  const padding = {
    paddingRight: 5
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/">Home</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/users">Users</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            {login
              ? <span style={padding}><em>{login.name} logged in</em></span>
              : <Link style={padding} to="/login">Login</Link>
            }
          </Nav.Link>
          {login &&
            <Nav.Link href="#" as="span">
              <button onClick={handleLogOut} style={{ border: "none", background: "transparent", color: "white", cursor: "pointer" }}>logout</button>
            </Nav.Link>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavMenu