import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: "notification",
  initialState: {},
  reducers: {
    createNotification(state, action) {
      state = action.payload
      return state
    },
  },
})

export const { createNotification } = notificationSlice.actions

export const addNotification = (message, type, timer) => {
  return async (dispatch) => {
    dispatch(createNotification({ message, type }))
    setTimeout(() => dispatch(createNotification({})), timer*10)
  }
}

export default notificationSlice.reducer
