import { useSelector } from "react-redux"

const Notification = () => {
  const { message, type } = useSelector(state => state.notification)

  if (!message) {
    return null
  }

  return (
    <div className={type ? "success" : "error"}>
      {message}
    </div>
  )
}

export default Notification