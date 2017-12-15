import { connect } from 'react-redux'

import ChecklistList from '../components/Checklists/ChecklistList'
import * as lists from '../modules/lists'

const mapStateToProps = (state) => ({
  lists: state.lists.toJS()
})

const mapDispatchToProps = (dispatch) => ({
  onCreate: (e) => {
    if (e.key !== 'Enter') return

    const value = e.target.value

    e.target.value = '' // Reset input field value

    return dispatch(lists.doCreate(value))
  },
  onDelete: (id) => dispatch(
    lists.doDestroy(id)
  ),
  onUpdate: (e, id) => dispatch(
    lists.doUpdate({ id, value: e.target.value })
  ),
  onListChange: (e, id) => dispatch(
    lists.doChangeActive(id)
  ),
  onUpdatable: (id) => dispatch(
    lists.doSetUpdatable(id)
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChecklistList)
