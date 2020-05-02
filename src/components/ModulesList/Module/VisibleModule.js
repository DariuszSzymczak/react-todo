import { connect } from "react-redux"
import Module from "./Module"
import { deleteModule } from "./../../../store/actions/actions"
const mapStateToProps = (state, ownProps) => ({
  key: ownProps.id,
  id: ownProps.id,
  text: ownProps.text,
  checked: ownProps.checked,
  tasks: ownProps.tasks
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteModule: () => dispatch(deleteModule(ownProps.id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Module)
