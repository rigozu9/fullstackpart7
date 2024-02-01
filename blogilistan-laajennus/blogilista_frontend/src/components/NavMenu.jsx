import { useDispatch, useSelector } from "react-redux"
import { logout } from "../reducers/loginReducer"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const NavMenu = () => {
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()

  const handleLogOut = () => dispatch(logout())

  if (!login) return null

  const padding = {
    marginRight: "10px",
    color: "white",
    textDecoration: "none"
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blog App
        </Typography>
        <Button color="inherit" component={Link} to="/" style={padding}>Home</Button>
        <Button color="inherit" component={Link} to="/users" style={padding}>Users</Button>
        {login ? (
          <Typography variant="body1" style={padding}>
            <em>{login.name} logged in</em>
          </Typography>
        ) : (
          <Button color="inherit" component={Link} to="/login" style={padding}>Login</Button>
        )}
        {login && (
          <Button color="inherit" onClick={handleLogOut} style={{ border: "none", background: "transparent", color: "white", cursor: "pointer" }}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavMenu
