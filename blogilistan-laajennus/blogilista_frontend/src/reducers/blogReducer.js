import { createSlice } from "@reduxjs/toolkit"
import blogService from "../services/blogs"
import { addNotification } from "./notificationReducer"

const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    updateLike(state, action) {
      const updatedBlog = action.payload
      const { id } = updatedBlog

      return state.map(blog =>
        blog.id !== id ? blog : updatedBlog
      )
    },
    deleteBlog(state, action) {
      const id = action.payload
      return state.filter(blog => blog.id !== id)
    },
    setBlogs(state, action) {
      return action.payload
    },
    appendBlog(state, action) {
      state.push(action.payload)
    },
  }
})

export const { updateLike, deleteBlog, setBlogs, appendBlog } = blogSlice.actions
export default blogSlice.reducer

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
  }
}

export const createBlog = content => {
  return async dispatch => {
    try {
      const newBlog = await blogService.create(content)
      dispatch(appendBlog(newBlog))
      dispatch(addNotification(
        `New blog: '${newBlog.title}' by ${newBlog.author} added`, true, 500
      ))
    } catch ({ response }) {
      dispatch(addNotification(
        response.data.error, false, 5
      ))
    }
  }
}

export const updateBlog = ( blogToUpdate ) => {
  return async dispatch => {
    try {
      const { id } = blogToUpdate
      const likedBlog = await blogService.like(id, blogToUpdate)
      dispatch(updateLike(likedBlog))
    } catch ({ response }) {
      dispatch(addNotification(
        response.data.error, false, 5
      ))
    }
  }
}

export const removeBlog = ( id ) => {
  return async dispatch => {
    try {
      await blogService.remove(id)
      dispatch(deleteBlog(id))
      dispatch(addNotification(
        "Blog has been removed", true, 500
      ))
    } catch ({ response }) {
      dispatch(addNotification(
        response.data.error, false, 5
      ))
    }
  }
}