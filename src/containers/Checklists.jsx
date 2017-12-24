import { connect } from 'react-redux'

import Checklists from '../components/Checklists'
import * as lists from '../modules/lists'

const mapStateToProps = (state) => ({
  lists: state.lists.toJS()
})

const mapDispatchToProps = (dispatch) => ({
  onCreate: (value) => {
    return dispatch(lists.doCreate(value))
  },
  onDelete: (id) => dispatch(
    lists.doDelete(id)
  ),
  onUpdateSave: (e) => {
    if (e.key === 'Enter')
      dispatch(lists.doSetUpdatable(null))
  },
  onUpdate: (e, id) => dispatch(
      lists.doUpdate({ id, value: e.target.value })
  ),
  onListChange: (id) => dispatch(
    lists.doChangeActive(id)
  ),
  onUpdatable: (id) => dispatch(
    lists.doSetUpdatable(id)
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checklists)
