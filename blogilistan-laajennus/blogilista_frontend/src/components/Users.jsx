import { useSelector } from "react-redux"
import Header from "./Header"

const Users = () => {
  const users = useSelector(state => state.users)

  return (
    <div>
      <Header />
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Blogs</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
