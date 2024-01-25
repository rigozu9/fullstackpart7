import { createSlice } from "@reduxjs/toolkit"
import loginService from "../services/login"
import blogService from "../services/blogs"
import { addNotification } from "./notificationReducer"

const loginSlice = createSlice({
  name: "login",
  initialState: null,
  reducers: {
    loginUser(state, action) {
      return action.payload
    },
    logoutUser() {
      return null
    }
  }
})
export const { loginUser, logoutUser } = loginSlice.actions


export const initializeUser = () => {
  return async dispatch => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser")

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(loginUser(user))
      blogService.setToken(user.token)
    }
  }
}

export const login = ( username, password ) => {
  return async dispatch => {
    try {
      const user = await loginService.login({
        username,
        password,
      })

      window.localStorage.setItem("loggedBlogAppUser", JSON.stringify(user))
      blogService.setToken(user.token)
      dispatch(loginUser(user))
      dispatch(addNotification(`${user.name} logged in!`, true, 500))

    } catch ({ response }) {
      dispatch(addNotification(response.data.error, false, 5))
    }
  }
}

export const logout = () => {
  return async dispatch => {
    window.localStorage.clear()
    dispatch(logoutUser())
  }
}

export default loginSlice.reducer