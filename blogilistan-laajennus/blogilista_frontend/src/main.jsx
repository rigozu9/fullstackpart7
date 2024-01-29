import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import store from "./store"
import { BrowserRouter as Router } from "react-router-dom"

console.log("store", store.getState())

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
)
