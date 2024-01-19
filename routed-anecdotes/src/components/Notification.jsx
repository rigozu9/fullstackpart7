// eslint-disable-next-line react/prop-types
const Notification = ({ notification }) => {
    const style = {
      padding: 10,
    }
  
    if (!notification) return null
  
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
  
  export default Notification