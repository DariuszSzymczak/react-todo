import { connect } from "react-redux"
import ModulesList from "./ModulesList"
import { loadAll, addModule } from "./../../store/actions/actions"
const mapDispatchToProps = dispatch => {
  return {
    loadAll: file => dispatch(loadAll(file)),
    addModule: mod => dispatch(addModule(mod))
  }
}

const mapStateToProps = state => {
  console.log("wchodzi state: ")
  console.log(state)
  return {
    modules: state.modules
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModulesList)
