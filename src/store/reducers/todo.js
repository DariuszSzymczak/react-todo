import {
  ADD_TODO,
  ADD_MODULE,
  LOAD_ALL,
  TOOGLE_MODULE,
  DELETE_MODULE
} from "./../actions/actions"

export const todo = (state = {}, action) => {
  let newState = { ...state }
  switch (action.type) {
    case LOAD_ALL:
      return action.file
    case ADD_MODULE:
      newState.modules.push(action.module)
      return newState
    case "ADD_MODULE2":
      return { ...state }
    case ADD_TODO:
      let id = newState.modules.findIndex(p => p.id === action.moduleId)
      newState.modules[id].tasks.push(action.todo)
      return newState
    case TOOGLE_MODULE:
      let id2 = newState.modules.findIndex(p => p.id === action.moduleId)
      newState.modules[id2].checked = !newState.modules[id].checked
      return newState
    case DELETE_MODULE:
      let st = { ...newState }
      let id3 = st.modules.findIndex(p => p.id === action.id)
      console.log("id w liscie to " + action.id)
      console.log(st.modules[id3])
      st.modules.pop()
      return st
    default:
      return state
  }
}
