import React from "react"
import Cockpit from "./components/cockpit"
import { store } from "./store/store"
import { Provider } from "react-redux"
import { loadAll } from "./store/actions/actions"
import * as data from "./database"
function App() {
  store.dispatch(loadAll(data.default))
  return (
    <Provider store={store}>
      <Cockpit />
    </Provider>
  )
}

export default App
