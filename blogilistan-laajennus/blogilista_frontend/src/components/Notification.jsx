import { useSelector } from "react-redux"
import { Alert } from "react-bootstrap"

const Notification = () => {
  const { message, type } = useSelector(state => state.notification)

  if (!message) {
    return null
  }

  return (
    <div className="container">
      {(message &&
    <Alert variant="success">
      {message}
    </Alert>
      )}
    </div>
  )
}

export default Notification