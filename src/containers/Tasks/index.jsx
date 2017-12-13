import { connect } from 'react-redux'

import TaskList from '../../components/Tasks/TaskList'
import * as tasks from './actions'

const mapStateToProps = (state) => ({
  tasks: state.tasks.toJS()
})

const mapDispatchToProps = (dispatch) => ({
  onCreate: (e) => (e.key === 'Enter'
    ? dispatch(tasks.create(e.target.value))
    : null
  ),
  onDelete: (id) => dispatch(
    tasks.destroy(id)
  ),
  onUpdate: (e, id) => dispatch(
    tasks.update({ id, value: e.target.value })
  ),
  onToogle: (e) => dispatch(
    tasks.toogle(e.target.value)
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
