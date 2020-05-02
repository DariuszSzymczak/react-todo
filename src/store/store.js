import { createStore } from "redux"
import { todo } from "./reducers/todo"
export const store = createStore(
  todo,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
window.store = store
