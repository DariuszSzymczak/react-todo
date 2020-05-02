// action types
export const ADD_MODULE = "ADD_MODULE"
export const ADD_TODO = "ADD_TODO"
export const LOAD_ALL = "LOAD_ALL"
export const TOOGLE_MODULE = "TOOGLE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"

export const addModule = module => ({
  type: ADD_MODULE,
  module: module
})

export const addTodo = (moduleId, todo) => ({
  type: ADD_TODO,
  moduleId: moduleId,
  todo: todo
})

export const loadAll = file => ({
  type: LOAD_ALL,
  file: file
})

export const ToggleModule = module => ({
  type: TOOGLE_MODULE,
  moduleId: module.id
})

export const deleteModule = id => ({
  type: DELETE_MODULE,
  id: id
})
