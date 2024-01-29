import { useSelector } from "react-redux"
import Header from "./Header"

const User = ({ user }) => {
  if (!user) return null
  console.log(user)

  const blogs = useSelector(state => state.blogs.filter(blog => blog.user.id === user.id))

  return (
    <div>
      <Header />
      <h1> {user.name}</h1>
      <h2>added blogs</h2>

      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            {blog.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User